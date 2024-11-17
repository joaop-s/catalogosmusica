const Artista = require('../models/Artista');
const Disco = require('../models/Disco'); // Para associar discos aos artistas

const ArtistasController = {
  // Exibir lista de artistas
  index: async (req, res) => {
    try {
      const artistas = await Artista.findAll({
        include: [Disco], // Inclui os discos associados
      });
      res.render('artistas/index', { artistas });
    } catch (error) {
      console.error('Erro ao listar artistas:', error);
      res.status(500).send('Erro interno no servidor');
    }
  },

  // Exibir formulário para criar artista
  createForm: async (req, res) => {
    try {
      const discos = await Disco.findAll(); // Para associar discos existentes
      res.render('artistas/form', { artista: null, discos });
    } catch (error) {
      console.error('Erro ao carregar formulário:', error);
      res.status(500).send('Erro interno no servidor');
    }
  },

  // Criar novo artista
  create: async (req, res) => {
    const { nome, generoMusical, discos } = req.body;
    try {
      const novoArtista = await Artista.create({ nome, generoMusical });
      if (discos) {
        await novoArtista.setDiscos(discos); // Associa discos ao artista
      }
      res.redirect('/artistas');
    } catch (error) {
      console.error('Erro ao criar artista:', error);
      res.status(500).send('Erro interno no servidor');
    }
  },

  // Exibir formulário para editar artista
  editForm: async (req, res) => {
    try {
      const artista = await Artista.findByPk(req.params.id, { include: [Disco] });
      const discos = await Disco.findAll(); // Todos os discos disponíveis
      if (!artista) return res.status(404).send('Artista não encontrado');
      res.render('artistas/form', { artista, discos });
    } catch (error) {
      console.error('Erro ao carregar formulário de edição:', error);
      res.status(500).send('Erro interno no servidor');
    }
  },

  // Atualizar artista
  update: async (req, res) => {
    const { nome, generoMusical, discos } = req.body;
    try {
      const artista = await Artista.findByPk(req.params.id);
      if (!artista) return res.status(404).send('Artista não encontrado');
      await artista.update({ nome, generoMusical });
      if (discos) {
        await artista.setDiscos(discos); // Atualiza associação de discos
      }
      res.redirect('/artistas');
    } catch (error) {
      console.error('Erro ao atualizar artista:', error);
      res.status(500).send('Erro interno no servidor');
    }
  },

  // Excluir artista
  delete: async (req, res) => {
    try {
      const artista = await Artista.findByPk(req.params.id);
      if (!artista) return res.status(404).send('Artista não encontrado');
      await artista.destroy();
      res.redirect('/artistas');
    } catch (error) {
      console.error('Erro ao excluir artista:', error);
      res.status(500).send('Erro interno no servidor');
    }
  },
};

module.exports = ArtistasController;
