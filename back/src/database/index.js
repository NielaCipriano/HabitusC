const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Usuario = require('../models/Usuario');
const Perfil = require('../models/Perfil');
const Conteudo = require('../models/Conteudo');
const Pauta = require('../models/Pauta');
const Curso = require('../models/Curso');
const Avaliado = require('../models/Avaliado');
const Avaliador = require('../models/Avaliador');
const Fato = require('../models/Fato');
const Atividade = require('../models/Atividade');
const Providencia = require('../models/Providencia');
const FatoObservado = require('../models/FatoObservado');

const connection = new Sequelize(dbConfig);

Usuario.init(connection);
Curso.init(connection);
Perfil.init(connection);
Conteudo.init(connection);
Pauta.init(connection);
Avaliado.init(connection);
Avaliador.init(connection);
Fato.init(connection);
Atividade.init(connection);
Providencia.init(connection);
FatoObservado.init(connection);

Usuario.associate(connection.models);
Conteudo.associate(connection.models);
Pauta.associate(connection.models);
Perfil.associate(connection.models);
Curso.associate(connection.models);
Avaliado.associate(connection.models);
Avaliador.associate(connection.models);
Fato.associate(connection.models);
Atividade.associate(connection.models);
Providencia.associate(connection.models);
FatoObservado.associate(connection.models);

module.exports = connection;