module.exports = function(sequelize, dataTypes){
    let alias = 'Follower';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        seguidor_id:{
            type: dataTypes.INTEGER,
        },
        seguido_id:{
            type: dataTypes.INTEGER,
        },
    }
    let config = {
        tableName: 'follower',
        timestamps: false,
        underscored: true,
    }
    const Follower = sequelize.define(alias, cols, config);
    Follower.associate = function(models){
        Follower.belongsTo(models.Usuario,{
            as: 'seguidor',
            foreignKey: 'seguidor_id'
        });
    }
        Follower.associate = function(models){
            Follower.belongsTo(models.Usuario,{
                as: 'seguido',
                foreignKey: 'seguido_id'
            });
        }
    return Follower;
    }