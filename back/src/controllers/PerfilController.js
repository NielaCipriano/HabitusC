const Perfil = require('../models/Perfil');
const Conteudo = require('../models/Conteudo');

module.exports = {
    async index(req,res){
        const perfis = await Perfil.findAll();

        return res.json(perfis);
    },
    
    async store(req,res){
        const {titulo_perfil,conteudoA,conteudoB,conteudoC,conteudoD,conteudoE} = req.body;
            //lista_conteudos} = req.body;

        const [perfil] = await Perfil.findOrCreate({
            where: {titulo_perfil}
        });
        
        const cA = await Conteudo.findByPk(conteudoA)
        perfil.addConteudo(cA);
        
        const cB = await Conteudo.findByPk(conteudoB)
        perfil.addConteudo(cB);
        
        const cC = await Conteudo.findByPk(conteudoC)
        perfil.addConteudo(cC);
        
        const cD = await Conteudo.findByPk(conteudoD)
        perfil.addConteudo(cD);
        
        const cE = await Conteudo.findByPk(conteudoE)
        perfil.addConteudo(cE);

        /*
        lista_conteudos.forEach(addConteudo);

        async function addConteudo(id){
            const conteudo = await Conteudo.findByPk(id)
            perfil.addConteudo(conteudo);
        }
        */

        return res.json(perfil);
    }
};