// models/Disco.js
module.exports = (sequelize, DataTypes) => {
    const Disco = sequelize.define('Disco', {
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      anoLancamento: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      capa: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Disco; // Retorna o modelo Disco corretamente
  };
  