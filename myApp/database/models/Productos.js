const { dataTypes } = require("sequelize/types");

module.exports = function(sequelize, dataTypes){
    let alias = 'producto';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        nombre:{
            type: dataTypes.STRING,
        },
        descripicion:{
            type: dataTypes.STRING,
        },
        fechaDeEntrega:{
            type: dataTypes.DATE,
        },
        comentarios:{
            type: dataTypes.INTEGER,
        },
        imagen:{
            type: dataTypes.STRING,
        },
    }
    let config = {
        tableName: 'productos',
        timestamps: false,
        underscored: true,
    }
    const Producto = sequelize.define(alias, cols, config);
    return Producto;
}