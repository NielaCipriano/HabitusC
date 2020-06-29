const {Model, DataTypes} = require('sequelize');

class Usuario extends Model{
    static init(sequelize){
        super.init({
            tipo_usuario: DataTypes.ENUM(['Coordenador','Avaliador','Avaliado']),
            nome_usuario: DataTypes.STRING,
            email_usuario: DataTypes.STRING,
            senha_usuario: DataTypes.STRING,
            foto_usuario: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models){
        this.hasMany(models.Avaliador, {foreignKey: 'usuario_id', as:'cursoAvaliadores'});
        this.hasMany(models.Avaliado, {foreignKey: 'usuario_id', as:'cursoAvaliados'});
        this.belongsToMany(models.Curso, {foreignKey: 'usuario_id', through: 'coordenadores',
         as:'cursoCoordenadores'});
    }
}

module.exports = Usuario;