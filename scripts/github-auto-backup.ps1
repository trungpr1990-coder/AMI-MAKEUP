$vaultPath = Split-Path -Parent $PSScriptRoot
$logDir = Join-Path $vaultPath "logs"
$logPath = Join-Path $logDir "github-auto-backup.log"

New-Item -ItemType Directory -Force -Path $logDir | Out-Null

function Log($msg) {
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    "$timestamp | $msg" | Out-File -FilePath $logPath -Append -Encoding utf8
}

Set-Location $vaultPath

$status = git status --porcelain
if (-not $status) {
    Log "No changes, skipped."
    exit 0
}

git add -A | Out-Null

$commitMsg = "Auto-backup $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git commit -m $commitMsg | Out-Null
if ($LASTEXITCODE -ne 0) {
    Log "ERROR: git commit failed."
    exit 1
}

git pull --rebase --autostash | Out-Null
if ($LASTEXITCODE -ne 0) {
    Log "ERROR: git pull --rebase failed (possible conflict). Manual fix needed."
    exit 1
}

git push | Out-Null
if ($LASTEXITCODE -ne 0) {
    Log "ERROR: git push failed."
    exit 1
}

Log "OK: pushed to GitHub - $commitMsg"
