// models/genero.js
module.exports = (sequelize, DataTypes) => {
    const Genero = sequelize.define('Genero', {
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    Genero.associate = function(models) {
      // Aqui você pode adicionar associações, se necessário
      Genero.belongsToMany(models.Disco, {
        through: 'Discos_Generos',
        foreignKey: 'generoId',
        as: 'discos',
      });
  
      Genero.belongsToMany(models.Faixa, {
        through: 'Faixas_Generos',
        foreignKey: 'generoId',
        as: 'faixas',
      });
    };
  
    return Genero;
  };
  