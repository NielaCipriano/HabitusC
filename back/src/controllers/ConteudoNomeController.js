const Conteudo = require('../models/Conteudo');
const Perfil = require('../models/Perfil');

module.exports = {
    async index(req,res){
        const {nome_conteudo} = req.params;

        const conteudo = await Conteudo.findOne(
            where = {nome_conteudo}
        );

        return res.json(conteudo.id);
    },

};