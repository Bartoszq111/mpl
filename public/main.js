const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 1178,
    height: 722,
    backgroundColor: "#1b102e",
    frame: false,
  });
  win.loadURL("http://localhost:3000/");
  win.shadow = true;
  win.resizable = false;
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
