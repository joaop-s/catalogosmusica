const sequelize = require('../config/database');
const Sequelize = require('sequelize');
const Disco = require('./Disco');
const Artista = require('./Artista');
const Genero = require('./Genero');


const sequelize = new Sequelize(process.env.DATABASE_URL, { // Use as configurações corretas
    dialect: 'postgres',
    logging: false,
  });

  const db = {
    sequelize,
    Sequelize,
    Disco: require('./Disco')(sequelize, Sequelize.DataTypes), // Certifique-se de que Disco está sendo instanciado corretamente
  };

Disco.belongsToMany(Artista, { through: 'DiscoArtista' });
Artista.belongsToMany(Disco, { through: 'DiscoArtista' });
Disco.belongsToMany(Genero, { through: 'DiscoGenero' });
Genero.belongsToMany(Disco, { through: 'DiscoGenero' });

module.exports = db;
module.exports = { sequelize, Disco, Artista, Genero };
