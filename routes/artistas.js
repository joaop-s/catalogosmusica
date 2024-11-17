const express = require('express');
const router = express.Router();
const ArtistasController = require('../controllers/ArtistasController');

// Rota para listar artistas
router.get('/', ArtistasController.index);

// Rota para exibir o formulário de criar artista
router.get('/create', ArtistasController.createForm);

// Rota para criar um novo artista
router.post('/create', ArtistasController.create);

// Rota para exibir o formulário de edição
router.get('/:id/edit', ArtistasController.editForm);

// Rota para atualizar artista
router.post('/:id/edit', ArtistasController.update);

// Rota para excluir artista
router.get('/:id/delete', ArtistasController.delete);

module.exports = router;
