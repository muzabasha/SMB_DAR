@echo off
REM Configure git
git config --global user.email "dev@example.com"
git config --global user.name "Developer"

REM Add all changes
git add -A

REM Commit changes
git commit -m "Fix: Comprehensive audit and fixes for unit-wise content rendering, video player, and component styling"

REM Push to GitHub
git push origin main

echo.
echo Push completed successfully!
pause
