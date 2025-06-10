const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  criarEntrevista: (dados) => ipcRenderer.invoke('criar-entrevista', dados),
  listarEntrevistas: () => ipcRenderer.invoke('listar-entrevistas'),
  deletarEntrevista: (id) => ipcRenderer.invoke('deletar-entrevista', id)
});
