const Curso = require('../models/Curso');
const Usuario = require('../models/Usuario');
const Avaliador = require('../models/Avaliador');

module.exports={

    async index(req,res){
        const {curso_id} = req.params;

        const avaliador = await Avaliador.findAll({
            where: {curso_id : curso_id},
            attributes: [],
            include: 'usuarioAvaliador'
        })

        return res.json(avaliador);
    },

    async all(req,res){
        const avaliadores = await Avaliador.findAll({
            attributes: [],
            include: 'usuarioAvaliador'
        })
        return res.json(avaliadores);
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

        const avaliador = await Avaliador.create({usuario_id: usuario.id,curso_id});

        return res.json(avaliador);
    },

    async delete(req,res){
        const {curso_id} = req.params;
        const {email_usuario} = req.body;

        const curso = await Curso.findByPk(curso_id)

        if(!curso){
            return res.status(400).json({error:'Curso não encontrado'});
        }

        const usuario = await Usuario.findOne({
            where: { email_usuario }
        });

        const [avaliador] = await Avaliador.findAll({
            where: {usuario_id : usuario.id}
        });

        await avaliador.destroy(avaliador);

        return res.json();
    }

};