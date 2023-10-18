module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductCart'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        product_id: {
            type: dataTypes.INTEGER(10),
            references: { model: 'Product', key: 'id' }
        },
        user_id: {
            type: dataTypes.INTEGER(10),
            references: { model: 'User', key: 'id' }
        },
        name_product: {
            type: dataTypes.STRING(50),
        },
        totalPrice: {
            type: dataTypes.DECIMAL(10, 2),
            defaultValue: 0.00
        }

        }
    };
    let config = {
        tableName: "productCarts",
        timestamps: false
    };

    const ProductCart = sequelize.define(alias, cols, config); 
    return ProductCart;
