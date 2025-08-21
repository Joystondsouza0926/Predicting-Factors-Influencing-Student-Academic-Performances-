#!/bin/bash

echo "========================================"
echo "Student Performance Predictor"
echo "========================================"
echo
echo "Starting the application..."
echo

echo "[1/3] Installing React dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "Error: Failed to install React dependencies"
    exit 1
fi

echo
echo "[2/3] Starting Flask backend (Port 5000)..."
python3 App.py &
BACKEND_PID=$!

echo
echo "[3/3] Starting React frontend (Port 3000)..."
npm start &
FRONTEND_PID=$!

echo
echo "========================================"
echo "Application is starting up!"
echo "========================================"
echo
echo "Backend: http://localhost:5000"
echo "Frontend: http://localhost:3000"
echo
echo "Press Ctrl+C to stop both services"
echo

# Function to cleanup background processes
cleanup() {
    echo
    echo "Stopping services..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    echo "Services stopped."
    exit 0
}

# Set trap to cleanup on script exit
trap cleanup SIGINT SIGTERM

# Wait for user to stop
wait
