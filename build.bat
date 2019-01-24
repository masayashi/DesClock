@echo off

set command=npx electron-packager ./src desclock --platform=win32 --arch=x64 --asar --out package
echo %command%
%command%

exit /b
