const Pauta = require("../models/Pauta");
const Conteudo = require("../models/Conteudo");

module.exports = {
    async index (req,res){
        const {conteudo_id} = req.params;

        const conteudo = await Conteudo.findByPk(conteudo_id,{
            include: {association: 'pautas'}
        });

        return res.json(conteudo);
    },

    async store (req,res){
        const {conteudo_id} = req.params;
        const {desc_pauta} = req.body;

        const conteudo = await Conteudo.findByPk(conteudo_id);

        if(!conteudo){
            return res.status(400).json({error: "Conteúdo não existe"})
        }

        await Pauta.create({desc_pauta,conteudo_id});

        // retorna todo o conteudo
        const conteudo2 = await Conteudo.findByPk(conteudo_id,{
            include: {association: 'pautas'}
        });
        return res.json(conteudo2);
    },

    async delete (req,res){
        const {conteudo_id, pauta_id} = req.params;

        const pauta = await Pauta.findByPk(pauta_id, {
            where: {conteudo_id}
        });

        if(pauta){
            await pauta.destroy();
        }
        const conteudo = await Conteudo.findByPk(conteudo_id,{
            include: {association: 'pautas'}
        });
        return res.json(conteudo);
    }
};
