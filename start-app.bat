@echo off
echo ========================================
echo Student Performance Predictor
echo ========================================
echo.
echo Starting the application...
echo.

echo [1/3] Installing React dependencies...
call npm install
if %errorlevel% neq 0 (
    echo Error: Failed to install React dependencies
    pause
    exit /b 1
)

echo.
echo [2/3] Starting Flask backend (Port 5000)...
start "Flask Backend" cmd /k "python App.py"

echo.
echo [3/3] Starting React frontend (Port 3000)...
start "React Frontend" cmd /k "npm start"

echo.
echo ========================================
echo Application is starting up!
echo ========================================
echo.
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo Both windows will open automatically.
echo Close this window when you're done.
echo.
pause
