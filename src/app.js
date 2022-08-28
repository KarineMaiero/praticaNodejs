// FUNÇÃO DO ARQUIVO: armazernar as principais importações e informações da aplicação
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());


app.use(express.json());

// rotas do nosso projeto

const movies = require('./routes/moviesRoutes');

// definir a rota principal
app.use('/movies', movies)

module.exports = app;
