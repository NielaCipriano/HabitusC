const {Model, DataTypes} = require('sequelize');

class Perfil extends Model{
    static init(sequelize){
        super.init({
            titulo_perfil: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    
    static associate(models){
        this.belongsToMany(models.Conteudo, {foreignKey: 'perfil_id', through: 'conteudo_Perfil',
         as:'conteudos'});
        this.hasMany(models.Curso, {foreignKey: 'perfil_id', as: 'cursos'});
    }
}

module.exports = Perfil;