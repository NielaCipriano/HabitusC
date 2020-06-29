const Curso = require('../models/Curso');
const Usuario = require('../models/Usuario');

module.exports = {
    async index(req,res){
        const {curso_id} = req.params;

        const curso = await Curso.findByPk(curso_id, {
            include: {association: 'coordenador', through: {attributes: []}}
            //attributes diz quais infos da tabela trazer
            //through attributes quais da tabela intermediaria, se [], omite dados dessa tabela
        })

        return res.json(curso.coordenador);
    },

    async store(req,res){
        const {titulo_curso} = req.params;
        const {email_usuario} = req.body;

        const curso = await Curso.findOne({
            where: {titulo_curso: titulo_curso}
        });

        if(!curso){
            return res.status(400).json({error:'Curso não encontrado'});
        }

        const [ usuario ] = await Usuario.findOrCreate({
            where: { email_usuario }
        });

        await curso.addCoordenador(usuario);
    
        return res.json(usuario);
    },

    async delete(req,res){
        const {curso_id} = req.params;
        const {email_usuario} = req.body;

        const curso = await Curso.findByPk(curso_id);

        if(!curso){
            return res.status(400).json({error:'Curso não encontrado'});
        }

        const usuario = await Usuario.findOne({
            where: { email_usuario }
        });

        await curso.removeCoordenador(usuario);
    
        return res.json();
    }

};