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
    
        created_at: {
            type: dataTypes.DATE
        },
        imagen:{
            type: dataTypes.STRING,
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

    Producto.associate = function(models){
        Producto.hasMany(models.Usuario,{
            as: 'usuario', //alias que desoues uso en associate
            foreignKey: 'usuario_id'
        });
        Producto.hasMany(models.Comentario,{
            as:'comentario',
            foreignKey:'product_id'
        })
    }
    
    return Producto;
}