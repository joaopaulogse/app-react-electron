const electron = require("electron")
const { app, BrowserWindow } = electron


let win
app.on("ready", ()=>{
    const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize
    win = new BrowserWindow({width, height})
    if(process.env.NODE_ENV === 'development'){
        win.loadURL("http://localhost:8888")
    }else if(process.env.NODE_ENV === 'production'){
        win.loadURL(`file:///${__dirname}/public/index.html`)
    }
})