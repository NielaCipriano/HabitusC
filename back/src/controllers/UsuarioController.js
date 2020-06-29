const Usuario = require('../models/Usuario');

module.exports = {
    async index(req, res){
        const usuarios = await Usuario.findAll();

        return res.json(usuarios);
    },

    async store(req,res){
        const { tipo_usuario,nome_usuario, email_usuario, senha_usuario, foto_usuario} = req.body;

        const usuario = await Usuario.create({tipo_usuario,nome_usuario,email_usuario,senha_usuario,foto_usuario});

        return res.json(usuario);
    }
};