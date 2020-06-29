'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('perfils', { 
      id:{ //não pode mudar o nome da variável?
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true, //consultar depois como criar um padrao de incrementar id
        allowNull: false,
      },
      titulo_perfil:{
        type: Sequelize.STRING,
        allowNull: false,
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
    return queryInterface.dropTable('perfils');
    
  }
};
