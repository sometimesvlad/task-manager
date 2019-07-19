const path = require('path');
      url = require('url');

const {app, BrowserWindow} = require('electron');

let win;

function createWindow(){
    win = new BrowserWindow({
        width: 650, 
        height: 1900,
        resizable: false,
        autoHideMenuBar: true, 
        backgroundColor: '#262626',
        icon: __dirname + "img/baseline_offline_bolt_white_48dp.png"
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
    app.quit();
});

