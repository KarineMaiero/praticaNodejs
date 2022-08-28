const express = require('express');
const router = express.Router();

const controllers = require('../controllers/movieControllers');

// DEMANDA: Ver todos os filmes disponíveis
router.get('/all', controllers.getAll);
router.post('/create', controllers.createMovie);

module.exports = router;