"""
Scrape Facebook Reels về dạy makeup cá nhân có trên 1 triệu view
Dùng Apify actor: apify/facebook-reels-scraper
"""

import json
import time
import csv
import requests
from datetime import datetime

APIFY_TOKEN = os.environ.get("APIFY_TOKEN", "")
ACTOR_ID = "apify~facebook-reels-scraper"
BASE_URL = "https://api.apify.com/v2"
MIN_VIEWS = 1_000_000

# Các trang Facebook về makeup/beauty cá nhân phổ biến
MAKEUP_PAGES = [
    "https://www.facebook.com/nikkietutorials",
    "https://www.facebook.com/JeffreeStar",
    "https://www.facebook.com/NatashaDenona",
    "https://www.facebook.com/makeupbyariel",
    "https://www.facebook.com/lisaeldridgemakeup",
    "https://www.facebook.com/wayofthekween",       # Wayne Goss
    "https://www.facebook.com/pixiwoo",
    "https://www.facebook.com/xsparkage",
    "https://www.facebook.com/KathleenLightsXO",
    "https://www.facebook.com/MannyMUA",
    # Thêm trang tiếng Việt / châu Á
    "https://www.facebook.com/makeup.by.nam",
    "https://www.facebook.com/quynhbui.makeup",
    "https://www.facebook.com/huongtran.makeup",
]

REELS_PER_PAGE = 100  # Số reels lấy mỗi trang (tối đa để tăng khả năng bắt được >1M)


def run_actor(page_urls: list[str]) -> str:
    """Khởi chạy Apify actor, trả về run ID."""
    url = f"{BASE_URL}/acts/{ACTOR_ID}/runs?token={APIFY_TOKEN}"
    payload = {
        "startUrls": [{"url": u} for u in page_urls],
        "resultsLimit": REELS_PER_PAGE,
    }
    resp = requests.post(url, json=payload, timeout=30)
    resp.raise_for_status()
    run_id = resp.json()["data"]["id"]
    print(f"Actor started. Run ID: {run_id}")
    return run_id


def wait_for_run(run_id: str, poll_interval: int = 15) -> None:
    """Đợi actor chạy xong."""
    url = f"{BASE_URL}/actor-runs/{run_id}?token={APIFY_TOKEN}"
    while True:
        resp = requests.get(url, timeout=15)
        resp.raise_for_status()
        status = resp.json()["data"]["status"]
        print(f"  Status: {status}")
        if status in ("SUCCEEDED", "FAILED", "ABORTED", "TIMED-OUT"):
            if status != "SUCCEEDED":
                raise RuntimeError(f"Actor run ended with status: {status}")
            break
        time.sleep(poll_interval)


def fetch_dataset(run_id: str) -> list[dict]:
    """Tải toàn bộ kết quả từ dataset."""
    url = f"{BASE_URL}/actor-runs/{run_id}/dataset/items?token={APIFY_TOKEN}&limit=9999"
    resp = requests.get(url, timeout=60)
    resp.raise_for_status()
    return resp.json()


def filter_high_view(items: list[dict]) -> list[dict]:
    """Giữ lại các reels có playCount >= MIN_VIEWS."""
    results = []
    for item in items:
        plays = item.get("playCount") or item.get("plays") or item.get("videoPlayCount") or 0
        if isinstance(plays, str):
            plays = int(plays.replace(",", "").replace(".", "") or 0)
        if plays >= MIN_VIEWS:
            results.append({**item, "_plays_normalized": plays})
    return sorted(results, key=lambda x: x["_plays_normalized"], reverse=True)


def save_results(items: list[dict], out_dir: str = "D:\\BỘ NÃO THỨ 2\\output") -> None:
    date_str = datetime.now().strftime("%Y%m%d_%H%M%S")
    json_path = f"{out_dir}\\makeup_reels_{date_str}.json"
    csv_path  = f"{out_dir}\\makeup_reels_{date_str}.csv"

    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(items, f, ensure_ascii=False, indent=2)
    print(f"JSON saved: {json_path}")

    if items:
        # Chọn các cột quan trọng cho CSV
        cols = [
            "_plays_normalized", "url", "text", "timestamp",
            "duration", "videoUrl", "ownerName", "ownerUrl",
        ]
        with open(csv_path, "w", newline="", encoding="utf-8-sig") as f:
            writer = csv.DictWriter(f, fieldnames=cols, extrasaction="ignore")
            writer.writeheader()
            writer.writerows(items)
        print(f"CSV saved:  {csv_path}")


def main():
    print(f"=== Scrape Facebook Reels makeup > {MIN_VIEWS:,} views ===")
    print(f"Pages: {len(MAKEUP_PAGES)}, reels/page: {REELS_PER_PAGE}")

    run_id = run_actor(MAKEUP_PAGES)

    print("Waiting for actor to finish...")
    wait_for_run(run_id)

    print("Fetching results...")
    all_items = fetch_dataset(run_id)
    print(f"Total reels fetched: {len(all_items)}")

    high_view = filter_high_view(all_items)
    print(f"Reels > {MIN_VIEWS:,} views: {len(high_view)}")

    if high_view:
        for i, r in enumerate(high_view[:10], 1):
            print(f"  {i}. {r.get('ownerName','?'):30s} | {r['_plays_normalized']:>12,} views | {r.get('url','')}")
    else:
        print("  Không tìm thấy reel nào vượt ngưỡng.")

    save_results(high_view)


if __name__ == "__main__":
    main()
