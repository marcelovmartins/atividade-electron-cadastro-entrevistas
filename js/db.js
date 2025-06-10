const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'entrevistas_db'
});

module.exports = db;