const Usuario = require('../models/Usuario');
const Avaliado = require('../models/Avaliado');
const Curso = require('../models/Curso');
const Sequelize = require('sequelize');

module.exports = {
    async index(req,res){
        const {avaliado_id} = req.params;

        const avaliado = await Avaliado.findByPk(avaliado_id);

        const usuario = await Usuario.findOne({
            where: {id: avaliado.usuario_id}
        })

        //const avaliado = await Avaliado.findByPk(avaliado_id,{
          //  include: [{
            //    model: Usuario,
              //  as: 'usuarioAvaliado',
           // }]
            //include: {association: 'usuarioAvaliado'}
            //attributes diz quais infos da tabela trazer
            //through attributes quais da tabela intermediaria, se [], omite dados dessa tabela
        //})

        return res.json(usuario);
    },

};