// youtube.js — Xác thực + upload video lên YouTube, KHÔNG dùng thư viện googleapis.
// Chỉ Node 18+ built-in fetch — khớp kiến trúc "không cần npm install" của hệ thống đăng Reel Facebook.
'use strict';
const fs = require('fs');
const cfg = require('./config');

const TOKEN_URL = 'https://oauth2.googleapis.com/token';
const UPLOAD_URL = 'https://www.googleapis.com/upload/youtube/v3/videos';
const API_URL = 'https://www.googleapis.com/youtube/v3';

function loadClientSecret() {
  const raw = JSON.parse(fs.readFileSync(cfg.CLIENT_SECRET, 'utf8'));
  const key = raw.installed || raw.web;
  if (!key) throw new Error('client_secret.json không hợp lệ (thiếu installed/web)');
  return key;
}

function loadRefreshToken(channelName) {
  const tokenFile = cfg.tokenFileFor(channelName);
  if (!fs.existsSync(tokenFile)) {
    const who = channelName ? `kênh "${channelName}"` : 'kênh mặc định';
    throw new Error(`Chưa có refresh token cho ${who} (${tokenFile}). Chạy: node auth.js ${channelName ? '"' + channelName + '"' : ''}`);
  }
  return JSON.parse(fs.readFileSync(tokenFile, 'utf8')).refresh_token;
}

// Đổi refresh_token -> access_token ngắn hạn (~1h). Không cache theo phiên vì mỗi lần chạy CI là 1 process mới.
async function getAccessToken(channelName) {
  const key = loadClientSecret();
  const refreshToken = loadRefreshToken(channelName);
  const r = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: key.client_id,
      client_secret: key.client_secret,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    }),
  });
  const j = await r.json();
  if (!r.ok || !j.access_token) throw new Error('Lấy access_token thất bại: ' + JSON.stringify(j));
  return j.access_token;
}

/**
 * Upload 1 video lên YouTube (resumable upload API, gọi trực tiếp bằng fetch).
 * @param {object} o
 *   o.videoPath, o.title, o.description, o.tags, o.privacyStatus,
 *   o.thumbnailPath (tùy chọn), o.playlistId (tùy chọn), o.channelName (tùy chọn)
 * @returns {Promise<{videoId, url}>}
 */
async function uploadVideo(o) {
  const accessToken = await getAccessToken(o.channelName);
  const stat = fs.statSync(o.videoPath);

  const metadata = {
    snippet: {
      title: (o.title || 'Video').slice(0, 100),
      description: o.description || '',
      tags: (o.tags || []).slice(0, 60),
      categoryId: '22', // People & Blogs
    },
    status: { privacyStatus: o.privacyStatus || 'private', selfDeclaredMadeForKids: false },
  };

  // Bước 1: khởi tạo phiên upload resumable -> lấy Location URL
  const initRes = await fetch(`${UPLOAD_URL}?uploadType=resumable&part=snippet,status`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json; charset=UTF-8',
      'X-Upload-Content-Type': 'video/*',
      'X-Upload-Content-Length': String(stat.size),
    },
    body: JSON.stringify(metadata),
  });
  if (!initRes.ok) throw new Error('Khởi tạo upload thất bại: ' + initRes.status + ' ' + (await initRes.text()));
  const uploadUrl = initRes.headers.get('location');
  if (!uploadUrl) throw new Error('Không nhận được upload URL từ YouTube.');

  // Bước 2: đẩy toàn bộ file video lên upload URL
  const videoBuf = fs.readFileSync(o.videoPath);
  const putRes = await fetch(uploadUrl, {
    method: 'PUT',
    headers: { 'Content-Type': 'video/*', 'Content-Length': String(videoBuf.length) },
    body: videoBuf,
  });
  const putJson = await putRes.json();
  if (!putRes.ok || !putJson.id) throw new Error('Upload video thất bại: ' + JSON.stringify(putJson));
  const videoId = putJson.id;

  // Thumbnail (tùy chọn — lỗi không chặn luồng chính)
  if (o.thumbnailPath && fs.existsSync(o.thumbnailPath)) {
    try {
      const imgBuf = fs.readFileSync(o.thumbnailPath);
      await fetch(`https://www.googleapis.com/upload/youtube/v3/thumbnails/set?videoId=${videoId}`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'image/*' },
        body: imgBuf,
      });
    } catch (_) { /* kênh chưa xác minh có thể chặn thumbnail — bỏ qua */ }
  }

  // Thêm vào playlist (tùy chọn)
  if (o.playlistId) {
    try {
      await fetch(`${API_URL}/playlistItems?part=snippet`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ snippet: { playlistId: o.playlistId, resourceId: { kind: 'youtube#video', videoId } } }),
      });
    } catch (_) { /* playlist id sai thì bỏ qua */ }
  }

  return { videoId, url: `https://www.youtube.com/watch?v=${videoId}` };
}

module.exports = { getAccessToken, uploadVideo };
