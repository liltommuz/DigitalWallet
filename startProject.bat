@echo off

echo "Starting ReactApp..."
start cmd /k "cd C:\Users\tommuz\Documents\DigitalWallet\frontend && npm start"

echo "Starting WebServer..."
start cmd /k "cd C:\Users\tommuz\Documents\DigitalWallet\backend && npm start"