const Curso = require('../models/Curso');
const Usuario = require('../models/Usuario');
const Avaliado = require('../models/Avaliado');

module.exports = {
    async index(req,res){
        const {curso_id} = req.params
        const {usuario_id} = req.params;
        
        const avaliado = await Avaliado.findOne({
            where: { curso_id, usuario_id }
        });
        
        return res.json(avaliado);
    },
};