<<<<<<< HEAD
# atividade-electron-cadastro-entrevistas
SENAC atividade-electron-cadastro-entrevistas
=======
# Sistema de Gerenciamento de Entrevistas

## Descrição
Aplicação desktop desenvolvida com Electron para gerenciar entrevistas de emprego, permitindo cadastrar, listar e deletar registros de entrevistas.

## Funcionalidades
- ✅ Criar nova entrevista (empresa, data, observações)
- ✅ Listar todas as entrevistas cadastradas
- ✅ Deletar entrevistas existentes
- 💾 Persistência de dados com MySQL

## Tecnologias Utilizadas
- **Electron** - Framework para aplicações desktop
- **Node.js** - Runtime JavaScript
- **MySQL** - Banco de dados relacional
- **HTML/CSS/JavaScript** - Interface do usuário

## Configuração do Banco de Dados

```sql
CREATE DATABASE entrevistas_db;
USE entrevistas_db;

CREATE TABLE entrevistas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  empresa VARCHAR(255) NOT NULL,
  data DATE NOT NULL,
  observacoes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Instalação e Execução

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure o banco de dados MySQL:
   - Certifique-se de que o MySQL está rodando
   - Crie o banco `entrevistas_db` e a tabela conforme o SQL acima
   - Ajuste as credenciais de conexão no arquivo `main.js` se necessário
4. Execute a aplicação:
   ```bash
   npm start
   ```

## Desenvolvimento
Para desenvolvimento com hot reload:
```bash
npm run dev
```

## Estrutura do Projeto
```
├── main.js          # Processo principal do Electron
├── preload.js       # Script de preload para comunicação segura
├── package.json     # Configurações e dependências
├── pages/
│   └── index.html   # Interface principal
├── styles/
│   └── style.css    # Estilos da aplicação
└── js/
    └── script.js    # Lógica do frontend
```
>>>>>>> 9be5244 (Primeira versão do sistema de entrevistas)
