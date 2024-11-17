require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Importar rotas
const artistasRoutes = require('./routes/artistas');
const generosRoutes = require('./routes/generos');
const discosRoutes = require('./routes/discos');

// Rota raiz - Redireciona para a lista de discos
app.get('/', (req, res) => {
  res.redirect('/discos');
});

// Usar as rotas
app.use('/artistas', artistasRoutes);
app.use('/generos', generosRoutes);
app.use('/discos', discosRoutes);


// Configurações do servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:3000`);
});

