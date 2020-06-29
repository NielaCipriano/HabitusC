const {Model, DataTypes} = require('sequelize');

class Conteudo extends Model{
    static init(sequelize){
        super.init({
            nome_conteudo: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models){
        this.hasMany(models.Pauta, {foreignKey: 'conteudo_id', as: 'pautas'});
        this.belongsToMany(models.Perfil, {foreignKey: 'conteudo_id', through: 'conteudo_Perfil',
         as:'perfils'});
        this.hasMany(models.FatoObservado, {foreignKey: 'conteudo_id', as: 'conteudoFato'});
    }
}

module.exports = Conteudo;