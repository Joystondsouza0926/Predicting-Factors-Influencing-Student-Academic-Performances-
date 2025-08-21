@echo off
echo ========================================
echo Restarting Student Performance Predictor
echo ========================================
echo.

echo Stopping existing processes...
taskkill /f /im python.exe 2>nul
taskkill /f /im node.exe 2>nul

echo.
echo [1/2] Starting Flask backend (Port 5000)...
start "Flask Backend" cmd /k "python App.py"

echo.
echo [2/2] Starting React frontend (Port 3000)...
start "React Frontend" cmd /k "npm start"

echo.
echo ========================================
echo Application is restarting!
echo ========================================
echo.
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo Both windows will open automatically.
echo Close this window when you're done.
echo.
pause
