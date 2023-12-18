const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbconnections');
const Usuario = require('./usuario');

const Usuario_PJ = sequelize.define('Usuario_PJ', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  razaoSocial: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nomeFantasia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cnpj: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  // Opções adicionais do modelo, se necessário
  timestamps: false,
  freezeTableName: true,
});

Usuario_PJ.belongsTo(Usuario); // Relacionamento com a tabela Usuario

Usuario_PJ

(async () => {
    try {
      await Usuario_PJ.sync({ force: false }); //{ force: true }
      console.log('Tabela de categoriaProduto criada com sucesso.');
  
    } catch (error) {
      console.error('Não foi possível conectar-se ao banco de dados:', error);
    }
  })();

module.exports = Usuario_PJ;