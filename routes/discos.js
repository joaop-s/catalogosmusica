const express = require('express');
const router = express.Router();
const Disco = require('../models/Disco'); 

router.get('/', async (req, res) => {
    try {
      const discos = await Disco.findAll(); // Aqui estamos usando o método findAll
      res.render('discos/index', { discos });
    } catch (error) {
      console.error('Erro ao listar discos:', error);
      res.status(500).send('Erro ao listar discos');
    }
  });


router.get('/criar', (req, res) => {
    res.render('discos/criar');  // Renderize o formulário de criação
});

// Rota POST para salvar o novo disco
router.post('/criar', async (req, res) => {
    try {
        const { titulo, anoLancamento, capa } = req.body;

        // Crie o disco no banco de dados
        await Disco.create({ titulo, anoLancamento, capa });

        // Redirecione para a lista de discos após salvar
        res.redirect('/discos');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao criar disco');
    }
});


module.exports = router;
