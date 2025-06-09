const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    criarEntrevista: (dados) => ipcRenderer.invoke('criarEntrevista', dados),
    listarEntrevistas: () => ipcRenderer.invoke('listarEntrevistas'),
    deletarEntrevista: (id) => ipcRenderer.invoke('deletarEntrevista', id)
});