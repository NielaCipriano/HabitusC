const {Model, DataTypes} = require('sequelize');

class Curso extends Model{
    static init(sequelize){
        super.init({
            titulo_curso: DataTypes.STRING,
            data_inicio_curso: DataTypes.DATE,
            data_fim_curso: DataTypes.DATE,
        }, {
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.Perfil, {foreignKey: 'perfil_id', as: 'perfil'});
        this.hasMany(models.Avaliador, {foreignKey: 'curso_id', as:'avaliador'});
        this.hasMany(models.Avaliado, {foreignKey: 'curso_id', as:'avaliado'});
        this.belongsToMany(models.Usuario, {foreignKey: 'curso_id', through: 'coordenadores',
         as:'coordenador'});
    }
}

module.exports = Curso;