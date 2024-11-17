const Genero = require('../models/Genero');

const GenerosController = {
  // Exibir lista de gêneros
  index: async (req, res) => {
    try {
      const generos = await Genero.findAll();
      res.render('generos/index', { generos });
    } catch (error) {
      console.error('Erro ao listar gêneros:', error);
      res.status(500).send('Erro interno no servidor');
    }
  },

  // Exibir formulário para criar gênero
  createForm: (req, res) => {
    res.render('generos/form', { genero: null });
  },

  // Criar novo gênero
  create: async (req, res) => {
    const { nome } = req.body;
    try {
      await Genero.create({ nome });
      res.redirect('/generos');
    } catch (error) {
      console.error('Erro ao criar gênero:', error);
      res.status(500).send('Erro interno no servidor');
    }
  },

  // Exibir formulário para editar gênero
  editForm: async (req, res) => {
    try {
      const genero = await Genero.findByPk(req.params.id);
      if (!genero) return res.status(404).send('Gênero não encontrado');
      res.render('generos/form', { genero });
    } catch (error) {
      console.error('Erro ao carregar formulário de edição:', error);
      res.status(500).send('Erro interno no servidor');
    }
  },

  // Atualizar gênero
  update: async (req, res) => {
    const { nome } = req.body;
    try {
      const genero = await Genero.findByPk(req.params.id);
      if (!genero) return res.status(404).send('Gênero não encontrado');
      await genero.update({ nome });
      res.redirect('/generos');
    } catch (error) {
      console.error('Erro ao atualizar gênero:', error);
      res.status(500).send('Erro interno no servidor');
    }
  },

  // Excluir gênero
  delete: async (req, res) => {
    try {
      const genero = await Genero.findByPk(req.params.id);
      if (!genero) return res.status(404).send('Gênero não encontrado');
      await genero.destroy();
      res.redirect('/generos');
    } catch (error) {
      console.error('Erro ao excluir gênero:', error);
      res.status(500).send('Erro interno no servidor');
    }
  },
};

module.exports = GenerosController;
