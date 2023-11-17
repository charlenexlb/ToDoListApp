// Modules to control app life nd create native browser window
import {app, BrowserWindow} from 'electron';
// const path = require('node:path')
import path from 'node:path';

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    mainWindow.loadFile('./client/index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

//listens to window-all-closed event and quits the app is user not on macOS
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
