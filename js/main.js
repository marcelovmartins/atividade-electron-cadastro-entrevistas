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

    mainWindow.loadFile(path.join(__dirname, '../pages/index.html'));
});

// Criar entrevista
ipcMain.handle('criarEntrevista', async (event, entrevista) => {
    try {
        const { empresa, data, observacoes } = entrevista;
        await db.query('INSERT INTO entrevistas (empresa, data, observacoes) VALUES (?, ?, ?)', [empresa, data, observacoes]);
        return { status: 'Entrevista cadastrada!' };
    } catch (error) {
        console.error('Erro ao criar entrevista:', error);
        return { status: 'Erro ao cadastrar entrevista!' };
    }
});

// Listar entrevistas
ipcMain.handle('listarEntrevistas', async () => {
    try {
        const [entrevistas] = await db.query('SELECT * FROM entrevistas ORDER BY data DESC');
        return entrevistas;
    } catch (error) {
        console.error('Erro ao listar entrevistas:', error);
        return [];
    }
});

// Deletar entrevista
ipcMain.handle('deletarEntrevista', async (event, id) => {
    try {
        await db.query('DELETE FROM entrevistas WHERE id = ?', [id]);
        return { status: 'Entrevista deletada!' };
    } catch (error) {
        console.error('Erro ao deletar entrevista:', error);
        return { status: 'Erro ao deletar entrevista!' };
    }
});