module.exports = function(sequelize, dataTypes){
    let alias = 'Producto';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        nombre:{
            type: dataTypes.STRING,
        },
        descripcion:{
            type: dataTypes.STRING,
        },
        fecha_entrega: {
            type: dataTypes.DATE
        },
        created_at: {
            type: dataTypes.DATE
        },
        imagen:{
            type: dataTypes.STRING,
        },
        created_at:{
            type: dataTypes.DATE,
        }, 
        usuario_id:{
            type: dataTypes.INTEGER,
        },
    }
    let config = {
        tableName: 'producto',
        timestamps: false,
        underscored: true,
    }
    const Producto = sequelize.define(alias, cols, config);
    return Producto;
}