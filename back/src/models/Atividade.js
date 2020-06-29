const {Model, DataTypes} = require('sequelize');

class Atividade extends Model{
    static init(sequelize){
        super.init({
            desc_atividade: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models){
        this.hasMany(models.FatoObservado, {foreignKey: 'atividade_id', as: 'atividade'});
    }
}

module.exports = Atividade;