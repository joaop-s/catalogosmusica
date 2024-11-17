// models/artista.js
module.exports = (sequelize, DataTypes) => {
    const Artista = sequelize.define('Artista', {
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      generoMusical: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    Artista.associate = function(models) {
      // Associação de artista com discos
      Artista.belongsToMany(models.Disco, {
        through: 'Discos_Artistas',
        foreignKey: 'artistaId',
        as: 'discos',
      });
    };
  
    return Artista;
  };
  