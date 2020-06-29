const Conteudo = require('../models/Conteudo');
const Pauta = require('../models/Pauta');
const Avaliado = require('../models/Avaliado');
const Avaliador = require('../models/Avaliador');
const Fato = require('../models/Fato');
const Atividade = require('../models/Atividade');
const Providencia = require('../models/Providencia');
const FatoObservado = require('../models/FatoObservado');
const Usuario = require('../models/Usuario');

module.exports = {
    async index(req,res){
        const {avaliador_id} = req.query;
        const where = {};

        if (avaliador_id) {
            where.avaliador_id = avaliador_id;
        }

        const fatoObservado = await FatoObservado.findAll({
            where,
            attributes: ['data_fato','tipo_fato'],
            include: [
                {model: Conteudo,
                as: 'conteudoFato',
                attributes: ['nome_conteudo']},
                {model: Pauta,
                as: 'pautaFato',
                attributes: ['desc_pauta']},
                {model: Fato,
                as: 'fatoFato',
                attributes: ['desc_fato']},
                {model: Atividade,
                as: 'atividadeFato',
                attributes: ['desc_atividade']},
                {model: Providencia,
                as: 'providenciaFato',
                attributes: ['desc_providencia']},
                {model: Avaliado,
                as: 'avaliados',
                through: {attributes: []},
                include: ['usuarioAvaliado']
                }
            ]
        })

        return res.json(fatoObservado);
    },

    async store(req,res){
        const {avaliador_id} = req.params;
        const {data_fato, tipo_fato,nome_conteudo,desc_pauta,desc_fato,
        desc_atividade,desc_providencia,avaliado_id} = req.body;
        //listaAvaliados} = req.body;

        console.log(tipo_fato);

        const avaliador = await Avaliador.findOne({where: {id: avaliador_id}});

        if(!avaliador){
            return res.status(400).json({error:'Avaliador não encontrado'});
        }

        const conteudo = await Conteudo.findOne({
            where: { nome_conteudo }
        });

        const pauta = await Pauta.findOne({
            where: { desc_pauta }
        });

        const buscaFato = await Fato.findOrCreate({
            where: { desc_fato }
        });

        const fato = await Fato.findOne({where: {desc_fato}});

        const buscaAtividade = await Atividade.findOrCreate({
            where: { desc_atividade }
        });

        const atividade = await Atividade.findOne({where: {desc_atividade}});

        const buscaProvidencia = await Providencia.findOrCreate({
            where: { desc_providencia }
        });

        const providencia = await Providencia.findOne({where: {desc_providencia}});

        const fatoObservado = await FatoObservado.create({
            avaliador_id: avaliador_id,
            data_fato : data_fato,
            tipo_fato : tipo_fato,
            conteudo_id : conteudo.id,
            pauta_id: pauta.id,
            fato_id: fato.id,
            atividade_id: atividade.id,
            providencia_id: providencia.id,
        });

        const avaliado = await Avaliado.findByPk(avaliado_id);
        fatoObservado.addAvaliado(avaliado);
        /*
        listaAvaliados.forEach(addAvaliado);

        async function addAvaliado(nome_avaliado){
            const usuario = await Usuario.findOne({
                where: {nome_usuario : nome_avaliado}
            })
            const avaliado = await Avaliado.findOne({
                where: {usuario_id : usuario.id}
            })
            console.log(avaliado.id)
            fatoObservado.addAvaliado(avaliado);
        };
        */

        return res.json(fatoObservado);
    },

    async delete(req,res){
        const {avaliador_id} = req.params;
        const {fatoObservado_id,listaAvaliados} = req.body;

        const avaliador = await Avaliador.findByPk(avaliador_id);

        if(!avaliador){
            return res.status(400).json({error:'Perfil não encontrado'});
        }

        const fatoObservado = await fatoObservado.findByPk(fatoObservado_id);

        if(avaliador_id != fatoObservado.avaliador_id){
            return res.status(400).json({error:"Avaliador não autorizado"});
        }

        listaAvaliados.forEach(delAvaliado);

        async function delAvaliado(nome_avaliado){
            const usuario = await Usuario.findOne({
                where: {nome_usuario : nome_avaliado}
            })
            const avaliado = await Avaliado.findOne({
                where: {usuario_id : usuario.id}
            })
            console.log(avaliado.id)
            fatoObservado.removeAvaliado(avaliado);
        };

        return res.json();
    }

};