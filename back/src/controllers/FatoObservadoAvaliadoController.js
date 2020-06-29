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
        const {avaliado_id} = req.params;

        const avaliado = await Avaliado.findByPk(avaliado_id,{
           //include: {association: 'fatosObservados', trough: {attributes: []}}
            include: [
                {model: FatoObservado,
                as: 'fatosObservados',
                attributes: ['id','data_fato','tipo_fato'],
                through: {attributes: []},
                include: [
                    {model: Avaliador,
                    as: 'avaliadorFato',
                    //through: {attributes: []},
                    //include:['usuarioAvaliador']},
                    },
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
                    attributes: ['desc_providencia']}
                ]}
            ]
        })

        if(!avaliado){
            return res.json("Não há fatos registrados")
        };

        return res.json(avaliado.fatosObservados);
    }

};