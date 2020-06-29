'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuarios', { 
      id:{ //não pode mudar o nome da variável?
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true, //consultar depois como criar um padrao de incrementar id
        allowNull: false,
      },
      tipo_usuario:{
        type: Sequelize.ENUM('Coordenador','Avaliador','Avaliado'),
        allowNull: false,
      },
      nome_usuario:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      email_usuario:{
        type: Sequelize.STRING,
        allowNull: false,
        //ver atributo para verificar formato correto
      },
      senha_usuario:{
        type: Sequelize.STRING,
        allowNull: false,
        //ver atributo para configurar tamanho e algarismos para senha
      },
      foto_usuario:{
        type: Sequelize.STRING,
        allowNull: true,
        //verificar se tipo está correto para imagem (virtuals)
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuarios');
    
  }
};
