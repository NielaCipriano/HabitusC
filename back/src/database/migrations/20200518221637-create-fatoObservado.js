'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('fatosObservados', { 
      id:{ //não pode mudar o nome da variável?
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true, //consultar depois como criar um padrao de incrementar id
        allowNull: false,
      },
      avaliador_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'avaliadores', key: 'id'},
        onUptade: 'CASCADE',
        onDelete: 'CASCADE', //set null, restrict
      },
      data_fato:{
        type: Sequelize.DATE,
        allowNull: false,
        //ver atributo para verificar formato correto
      },
      tipo_fato:{
        type: Sequelize.ENUM('Positivo','Negativo','Neutro'),
        allowNull: false,
      },
      conteudo_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'conteudos', key: 'id'},
        onUptade: 'CASCADE',
        onDelete: 'CASCADE', //set null, restrict
      },
      pauta_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'pauta', key: 'id'},
        onUptade: 'CASCADE',
        onDelete: 'CASCADE', //set null, restrict
      },
      fato_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'fatos', key: 'id'},
        onUptade: 'CASCADE',
        onDelete: 'CASCADE', //set null, restrict
      },
      atividade_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'atividades', key: 'id'},
        onUptade: 'CASCADE',
        onDelete: 'CASCADE', //set null, restrict
      },
      providencia_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'providencias', key: 'id'},
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
    return queryInterface.dropTable('fatosObservados');
    
  }
};