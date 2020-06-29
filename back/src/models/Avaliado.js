const {Model, DataTypes} = require('sequelize');

class Avaliado extends Model{
    static init(sequelize){
        super.init({
            
        }, {
            sequelize
        })
    }
    static associate(models){
        this.belongsTo(models.Usuario, {foreignKey: 'usuario_id', as:'usuarioAvaliado'});
        this.belongsTo(models.Curso, {foreignKey: 'curso_id', as:'cursoAvaliado'});
        this.belongsToMany(models.FatoObservado, {foreignKey: 'avaliado_id', through: 'avaliadosFatos',
         as:'fatosObservados'});
    }
}

module.exports = Avaliado;