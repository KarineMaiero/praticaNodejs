// funcao: inicializar o servidor em node.js localmente - localhost

const app = require('./src/app');
const PORT = 8080;
// 3030, 3333, 6060, 666, 8080, 8000

// app.listen(porta, funcao anonima)

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});