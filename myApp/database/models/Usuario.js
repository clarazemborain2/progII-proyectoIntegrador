module.exports = function(sequelize, dataTypes){
    let alias = 'Usuario';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        email: {
            type: dataTypes.STRING
        },
        usuario: {
            type: dataTypes.STRING
        },
        constrasenia: {
            type: dataTypes.STRING
        },
        fecha_de_nacimiento: {
            type: dataTypes.DATE
        },
        nro_de_documento: {
            type: dataTypes.INTEGER
        },
        foto_de_perfil: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "usuario",
        timestamps: true,
        underscore: true,
    }
    const Usuario = sequelize.define(alias, cols, config);
    return Usuario;
}