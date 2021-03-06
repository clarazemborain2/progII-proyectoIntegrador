module.exports = function(sequelize, dataTypes){
    let alias = 'Comentario';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        comentario: {
            type: dataTypes.STRING,
        },
        product_id: {
            type: dataTypes.INTEGER,
        },
        usuario_id: {
            type: dataTypes.INTEGER,
        },
        created_at: {
            type: dataTypes.DATE,
        }
    };
    let config = {
        tableName: 'comentario',
        timestamps: false,
        underscore: true,
    };
    const Comentario = sequelize.define(alias, cols, config);

    Comentario.associate = function(models){
        Comentario.belongsTo(models.Producto, {
            as: 'relacionProducto',
            foreignKey: 'product_id',
        }),
        Comentario.belongsTo(models.Usuario, {
            as: 'relacionUsuario',
            foreignKey: 'usuario_id',
        })
    }

    return Comentario;
}
            