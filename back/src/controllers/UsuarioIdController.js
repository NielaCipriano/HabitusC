const Usuario = require('../models/Usuario');

module.exports = {
    async index(req,res){
        const {id} = req.params;

        const usuario = await Usuario.findByPk(id);

        return res.json(usuario);
    }
};