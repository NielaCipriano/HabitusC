const Curso = require('../models/Curso');
const Perfil = require('../models/Perfil');

module.exports = {
    async index(req,res){
        const cursos = await Curso.findAll();

        return res.json(cursos);
    },
    
    async store(req,res){
        const {perfil_id} = req.params;
        const { titulo_curso,data_inicio_curso, data_fim_curso} = req.body;

        const perfil = await Perfil.findByPk(perfil_id);

        if(!perfil){
            return res.status(400).json({error:'Perfil não encontrado'});
        }

        const curso = await Curso.create({titulo_curso,data_inicio_curso, data_fim_curso,perfil_id});
    
        perfil.addCurso(curso);

        return res.json(curso);
    }

};