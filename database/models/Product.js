module.exports = (sequelize, dataTypes) => {
    let alias = 'Product'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        marca: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        modelo: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        img: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        descripcion: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        category: {
            type: dataTypes.STRING(100),
        },
        price: {
            type: dataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        color: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        caracteristicas: {
            type: dataTypes.STRING(100),
            allowNull: false,
        }
    };
    let config = {
        tableName: "products",
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config); 
    return Product;
}