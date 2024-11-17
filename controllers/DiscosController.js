const Discos = require('../models/Disco');

const DiscosController = {
  index: (req, res) => {
    Discos.findAll()
      .then(discos => {
        res.render('discos/index', { discos });
      })
      .catch(err => {
        console.error('Erro ao buscar discos:', err);  // Adicionando log para erros
        res.status(500).send('Erro ao carregar discos');
      });
  },

  // Outras funções do controller...
};

module.exports = DiscosController;
