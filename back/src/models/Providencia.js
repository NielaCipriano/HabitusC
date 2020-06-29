const {Model, DataTypes} = require('sequelize');

class Providencia extends Model{
    static init(sequelize){
        super.init({
            desc_providencia: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'providencias'
        })
    }

    static associate(models){
        this.hasMany(models.FatoObservado, {foreignKey: 'providencia_id', as: 'providencia'});
    }
}

module.exports = Providencia;