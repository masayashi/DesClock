const {app, BrowserWindow, Menu, Tray} = require('electron');
 
let mainWindow;
let icon;
const json = require('./settings.json');

function createWindow() {
  mainWindow = new BrowserWindow({
    x: json.x,
    y: json.y,
    width: 400,
    height: 200,
    transparent: true,
    frame: false,
    resizable: false,
    hasShadow: false,
    alwaysOnTop: true,
    show: true,
    skipTaskbar: true,
  });

  // マウスイベントを無視
  mainWindow.setIgnoreMouseEvents(true);
 
  mainWindow.loadFile('index.html');
 
  // デベロッパーツールの起動
  // mainWindow.webContents.openDevTools();
 
  // メインウィンドウが閉じられたときの処理
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // タスクトレイ用アイコンとコンテキストメニュー
  icon = new Tray('resources/icon.png')
  const contextMenu = Menu.buildFromTemplate([
    {label:'hoge', type: 'radio'}
  ])
  icon.setContextMenu(contextMenu)
}
 
//  初期化が完了した時の処理
app.on('ready', createWindow);
 
// 全てのウィンドウが閉じたときの処理
app.on('window-all-closed', () => {
  // macOSのとき以外はアプリケーションを終了させます
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// アプリケーションがアクティブになった時の処理(Macだと、Dockがクリックされた時）
app.on('activate', () => {
  // メインウィンドウが消えている場合は再度メインウィンドウを作成する
  if (mainWindow === null) {
    createWindow();
  }
});
