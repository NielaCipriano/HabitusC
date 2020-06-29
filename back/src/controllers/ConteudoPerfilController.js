const Conteudo = require('../models/Conteudo');
const Perfil = require('../models/Perfil');

module.exports = {
    async index(req,res){
        const {perfil_id} = req.params;

        const perfil = await Perfil.findByPk(perfil_id, {
            include: {association: 'conteudos', through: {attributes: []}}
            //attributes diz quais infos da tabela trazer
            //through attributes quais da tabela intermediaria, se [], omite dados dessa tabela
        })

        return res.json(perfil.conteudos);
    },

};