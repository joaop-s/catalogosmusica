const express = require('express');
const router = express.Router();
const GenerosController = require('../controllers/GenerosController');

router.get('/', GenerosController.index); // Exibir lista de gêneros
router.get('/create', GenerosController.createForm); // Formulário para criar gênero
router.post('/create', GenerosController.create); // Criar novo gênero
router.get('/:id/edit', GenerosController.editForm); // Formulário para editar gênero
router.post('/:id/edit', GenerosController.update); // Atualizar gênero
router.get('/:id/delete', GenerosController.delete); // Excluir gênero

module.exports = router;
