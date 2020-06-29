const Curso = require('../models/Curso');
const Usuario = require('../models/Usuario');
const Avaliado = require('../models/Avaliado');

module.exports = {
    async index(req,res){
        const {curso_id} = req.params;

        const avaliado = await Avaliado.findAll({
            where: {curso_id : curso_id},
            attributes: [],
            include: 'usuarioAvaliado'
        })

        return res.json(avaliado);
    },

    async store(req,res){
        const {curso_id} = req.params;
        const {email_usuario} = req.body;

        const curso = await Curso.findByPk(curso_id);

        if(!curso){
            return res.status(400).json({error:'Curso não encontrado'});
        }

        const  usuario  = await Usuario.findOne({
            where: { email_usuario },
            attributes: ['id']
        });
    
        const avaliado = await Avaliado.create({usuario_id: usuario.id,curso_id});
    
        return res.json(avaliado);
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

        const avaliado = await Avaliado.findOne({
            where: {usuario_id : usuario.id}
        })

        await avaliado.destroy(avaliado);
    
        return res.json();
    }

};