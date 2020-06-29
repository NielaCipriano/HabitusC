const Usuario = require('../models/Usuario');
const Avaliador = require('../models/Avaliador');
const Curso = require('../models/Curso');

module.exports = {
    async index(req,res){
        const {avaliador_id} = req.params;

        const avaliador = await Avaliador.findByPk(avaliador_id, {
            include: {association: 'usuarioAvaliador'}
            //attributes diz quais infos da tabela trazer
            //through attributes quais da tabela intermediaria, se [], omite dados dessa tabela
        })

        return res.json(avaliador);
    },

};