const {app, BrowserWindow} = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')

let win

function buildWindow() {
  win = new BrowserWindow({
    width: 232,
    height: 330,
    useContentSize: true,
    resizable: false,
    show: false
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
  if (process.platform !== 'darwin')
    app.quit()
})

app.on('activate', buildWindow)
