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
            .catch((error) => { console.log('error') })
    },
    'img': (req, res) => {
        let params = req.params.id
        db.Product.findByPk(params)
            .then((result) => {
                let variable = result.img.split(' ');
                res.json(variable);
            })
            .catch((error) => { console.log('error') })
    },
    // 'obtenerProductos': async (req, res) => {
    // try {
    //     const { page = 1, limit = 10 } = req.query;

    //     // Validación de parámetros de consulta
    //     const pageInt = parseInt(page);
    //     const limitInt = parseInt(limit);

    //     if (isNaN(pageInt) || isNaN(limitInt) || pageInt < 1 || limitInt < 1) {
    //         res.status(400).json({ error: "Parámetros de consulta inválidos" });
    //         return;
    //     }

    //     const offset = (pageInt - 1) * limitInt;

    //     // Recuperación de productos con paginación
    //     const productos = await Producto.findAll({ limit: limitInt, offset });

    //     // Cálculo de total de productos y páginas
    //     const totalProductos = await Producto.count();
    //     const totalPages = Math.ceil(totalProductos / limitInt);

    //     // URLs de página siguiente y anterior
    //     const nextPage = pageInt < totalPages ? `/api/products/?page=${pageInt + 1}&limit=${limitInt}` : null;
    //     const prevPage = pageInt > 1 ? `/api/products/?page=${pageInt - 1}&limit=${limitInt}` : null;

    //     // Respuesta JSON
    //     res.json({
    //         productos,
    //         nextPage,
    //         prevPage,
    //     });
    // } catch (error) {
    //     console.error("Error al procesar la solicitud:", error);
    //     res.status(500).json({ error: "Error interno del servidor" });
    // }
    // }
    'obtenerProductosPaginados': (req, res) => {
        
        function obtenerDatosPaginados(url) {
            return fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data);// Puedes realizar cualquier manipulación adicional de los datos aquí si es necesario
                    return data;
                });
}   
        const limit = req.query.limit || 10;
        const offset = req.query.offset || 0;
        const url = `http://localhost:3030/api/products/?limit=${limit}&offset=${offset}`;

        obtenerDatosPaginados(url)
            .then(data => {
                res.json({ results: data });
            })
            .catch(error => {
                console.error('Error al obtener datos:', error);
                res.status(500).json({ error: 'Error interno del servidor' });
            });
    
}
};



module.exports = controller;
