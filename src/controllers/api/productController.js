const db = require('../../../database/models');
const { login } = require('../usersController');
const sequelize = db.sequelize;


const controller = {
    'count': (req, res) => {
        let count, countByCategory, products;
        db.Product.count()
            .then((totalProducts) => {
                count = totalProducts;
                return db.Product.findAll({
                    attributes: ['marca', [sequelize.fn('COUNT', 'marca'), 'count']],
                    group: ['marca'],
                });
            })
            .then((categoryCounts) => {
                countByCategory = categoryCounts.reduce((acc, category) => {
                    acc[category.marca] = category.get('count');
                    return acc;
                }, {});
                return db.Product.findAll({
                    attributes: ['id', 'name', 'descripcion', 'marca'],
                });
            })
            .then((productList) => {
                products = productList.map(product => ({
                    id: product.id,
                    name: product.name,
                    description: product.descripcion,
                    categories: product.marca,
                    detail: `http://localhost:3030/detalleProd/${product.id}`
                }));

                // Crear el objeto literal de respuesta
                const response = {
                    count,
                    countByCategory,
                    products
                };

                // Enviar la respuesta al cliente
                res.json(response);
            })
            .catch((error) => {
                console.error('Error al obtener la información de productos:', error);
                res.status(500).json({ error: 'Error interno del servidor' });
            })
    },
    'detail': (req, res) => { 
        let id, name, marca, modelo, descripcion, category, price, color, caracteristicas, detail
        db.Product.findByPk(req.params.id)
            .then(
                product => {
                    id = product.id
                    name = product.name
                    descripcion = product.descripcion
                    marca = product.marca
                    modelo = product.modelo
                    category = product.category
                    price = product.price
                    color = product.color
                    caracteristicas = product.caracteristicas
                    detail = `http://localhost:3030/detalleProd/${product.id}`

                
                const result = {
                        id,
                        name,
                        marca,
                        modelo,
                        descripcion,
                        category,
                        price,
                        color,
                        caracteristicas,
                        detail
        }
                    res.json(result);
})
        .catch((error) => { console.log('error')} )
    },
    'img': (req, res) => {
        let params = req.params.id
        db.Product.findByPk(params)
            .then((result) => {
                let variable = result.img.split(' ');
                res.json(variable);
            })
        .catch((error) => { console.log('error')} )
    }
}




module.exports = controller;
