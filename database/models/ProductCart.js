module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductCart'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        products_id: {
            type: dataTypes.INTEGER(10),
            references: { model: 'Product', key: 'id' }
        },
        name_product: {
            type: dataTypes.STRING(50),
        },
        price: {
            type: dataTypes.DECIMAL(10, 2),
        },
        img: {
            type: dataTypes.STRING(300)
        }
        }
    
    let config = {
        tableName: "productCart",
        timestamps: false
    };

    const ProductCart = sequelize.define(alias, cols, config); 
    return ProductCart;

};