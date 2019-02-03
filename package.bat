setlocal

set dist=DesClock.zip
del %dist%

set command=Compress-Archive -Path package/desclock-win32-x64/* -DestinationPath %dist%
powershell -NoProfile -ExecutionPolicy Unrestricted -Command "& { %command% }"

endlocal
exit /b
