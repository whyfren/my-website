@echo off
cd /d %~dp0
git add .
git commit -m "Update otomatis: %date% %time%"
git push origin main
pause
