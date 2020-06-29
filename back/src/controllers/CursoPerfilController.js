const Curso = require('../models/Curso');
const Perfil = require('../models/Perfil');

module.exports = {
    async index (req,res){
        const {perfil_id} = req.params;
        
        const perfil = await Perfil.findByPk(perfil_id,{
            include: {association: 'cursos'}
        });

        return res.json(perfil);
    },

};