module.exports = function(sequelize, dataTypes){
    let alias = 'Usuario';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: dataTypes.STRING
        },
        usuario: {
            type: dataTypes.STRING
        },
        contra: {
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
        },
       
    };
    let config = {
        tableName: "usuario",
        timestamps: false,
        underscore: true,
    }
    const Usuario = sequelize.define(alias, cols, config);
    return Usuario;
}