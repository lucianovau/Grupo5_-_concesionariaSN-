module.exports = (sequelize, dataTypes) => {
    let alias = 'FichaTecnica'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        motor: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        potencia: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        torque: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        transmision: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        confort: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        seguridad: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        caracteristicas: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
    };
    let config = {
        tableName: "fichaTecnicas",
        timestamps: false
    };

    const FichaTecnica = sequelize.define(alias, cols, config); 
    return FichaTecnica;
}