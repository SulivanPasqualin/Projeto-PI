const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbconnections');
const { Fornecedor_PF } = require('../config/associations');

const FornecedorPF = sequelize.define('FornecedorPF', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numEndereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  // Opções adicionais do modelo, se necessário
  timestamps: false,
  freezeTableName: true,
});

(async () => {
    try {
      await Fornecedor_PF.sync({ force: false }); //{ force: true }
      console.log('Tabela de categoriaProduto criada com sucesso.');
  
    } catch (error) {
      console.error('Não foi possível conectar-se ao banco de dados:', error);
    }
  })();

module.exports = FornecedorPF;