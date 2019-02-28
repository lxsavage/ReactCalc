const {app, BrowserWindow, systemPreferences, ipcMain, rendererWindow} = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')

const hasDarkTheme = systemPreferences.isDarkMode()
let win

// Allow App / Button to see if the process is in dark mode
ipcMain.on('IS_DARK_MODE', (event) => {
  event.returnValue = hasDarkTheme
})

function buildWindow() {
  win = new BrowserWindow({
    width: 232,
    height: 330,
    useContentSize: true,
    resizable: false,
    //fullscreenable: false,
    maximizable: false,
    show: false,
    darkTheme: hasDarkTheme
  })
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  )
  win.webContents.once('did-finish-load', () => {
    win.show()
  })
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', buildWindow)

app.on('window-all-closed', () => {
  //if (process.platform !== 'darwin')
    app.quit()
})

//app.on('activate', buildWindow)
