const Curso = require('../models/Curso');
const Usuario = require('../models/Usuario');
const Avaliador = require('../models/Avaliador');

module.exports = {
    async index(req,res){
        const {curso_id} = req.params
        const {usuario_id} = req.params;
        
        const avaliador = await Avaliador.findOne({
            where: { curso_id, usuario_id },
        });
        
        return res.json(avaliador);
    },
};