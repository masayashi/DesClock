@echo off

set command=npx electron-packager ./src desclock --platform=win32 --arch=x64 --asar --out package --overwrite --icon=resources/icon.ico
echo %command%
%command%

exit /b
