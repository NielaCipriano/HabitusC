'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cursos', { 
      id:{ //não pode mudar o nome da variável?
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true, //consultar depois como criar um padrao de incrementar id
        allowNull: false,
      },
      titulo_curso:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_inicio_curso:{
        type: Sequelize.DATE,
        allowNull: false,
        //ver atributo para verificar formato correto
      },
      data_fim_curso:{
        type: Sequelize.DATE,
        allowNull: false,
        //ver atributo para configurar tamanho e algarismos para senha
      },
      perfil_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'perfils', key: 'id'},
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
    return queryInterface.dropTable('cursos');
    
  }
};
