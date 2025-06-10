const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const db = require('./db');

let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    mainWindow.loadFile('index.html');
});

// Canal para criar entrevista
ipcMain.handle('criarEntrevista', async (event, entrevista) => {
    try {
        const { empresa, data, observacoes } = entrevista;
        await db.query('INSERT INTO entrevistas (empresa, data, observacoes) VALUES (?, ?, ?)', [empresa, data, observacoes]);
        return { status: 'Entrevista cadastrada com sucesso!' };
    } catch (error) {
        console.error('Erro ao criar entrevista:', error);
        return { status: 'Erro ao cadastrar entrevista!' };
    }
});

// Canal para listar todas as entrevistas
ipcMain.handle('listarEntrevistas', async () => {
    try {
        const [entrevistas] = await db.query('SELECT * FROM entrevistas ORDER BY data DESC');
        return entrevistas;
    } catch (error) {
        console.error('Erro ao listar entrevistas:', error);
        return [];
    }
});

// Canal para deletar entrevista pelo ID
ipcMain.handle('deletarEntrevista', async (event, id) => {
    try {
        await db.query('DELETE FROM entrevistas WHERE id = ?', [id]);
        return { status: 'Entrevista deletada com sucesso!' };
    } catch (error) {
        console.error('Erro ao deletar entrevista:', error);
        return { status: 'Erro ao deletar entrevista!' };
    }
});