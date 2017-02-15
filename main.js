const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

require('dotenv').config();
require('electron-reload')(__dirname);

let win = null;

app.on('ready', function () {

  win = new BrowserWindow({width: 1000, height: 600});

  win.loadURL('http://localhost:4200');

  if(process.env.PACKAGE === 'true'){
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      sashes: true
    }));
  } else {
    win.loadURL(process.env.HOST);
    win.webContents.openDevTools();
  }

  win.on('closed', function () {
    win = null;
  })

});

app.on('window-all-closed', function(){
  if(process.plaform != 'darwin'){
    app.quit();
  }
});