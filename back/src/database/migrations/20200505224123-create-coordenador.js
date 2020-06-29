'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('coordenadores', { 
      id:{ //não pode mudar o nome da variável?
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true, //consultar depois como criar um padrao de incrementar id
        allowNull: false,
      },
      usuario_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'usuarios', key: 'id'},
        onUptade: 'CASCADE',
        onDelete: 'CASCADE', //set null, restrict
      },
      curso_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'cursos', key: 'id'},
        onUptade: 'CASCADE',
        onDelete: 'CASCADE', //set null, restrict
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
    return queryInterface.dropTable('coordenadores');
    
  }
};
