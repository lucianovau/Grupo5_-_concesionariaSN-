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
        img1: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        img2: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        img3: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        img4: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        img5: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        img6: {
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
        id_fichaTecnica: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            references: { model: 'fichatecnica', key: 'id' }            
        }
    };
    let config = {
        tableName: "products",
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config); 
    return Product;
}