const {Model, DataTypes} = require('sequelize');

class FatoObservado extends Model{
    static init(sequelize){
        super.init({
            data_fato: DataTypes.DATE,
            tipo_fato: DataTypes.ENUM(['Positivo','Negativo','Neutro']),
        }, {
            sequelize,
            tableName: "fatosObservados"
        })
    }

    static associate(models){
       
        this.belongsTo(models.Avaliador, {foreignKey: 'avaliador_id', as:'avaliadorFato'});
        this.belongsTo(models.Conteudo, {foreignKey: 'conteudo_id', as:'conteudoFato'});
        this.belongsTo(models.Pauta, {foreignKey: 'pauta_id', as:'pautaFato'});
        this.belongsTo(models.Fato, {foreignKey: 'fato_id', as:'fatoFato'});
        this.belongsTo(models.Atividade, {foreignKey: 'atividade_id', as:'atividadeFato'});
        this.belongsTo(models.Providencia, {foreignKey: 'providencia_id', as:'providenciaFato'});
        this.belongsToMany(models.Avaliado, {foreignKey: 'fato_observado_id', through: 'avaliadosFatos',
         as:'avaliados'});
    }
}

module.exports = FatoObservado;