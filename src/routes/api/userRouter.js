const express = require('express');
const path = require('path');
const router = express.Router();
const controller = require('../../controllers/api/userController');
const { Usuario, Producto } = require('../../../database/models/User.js'); 

// Endpoint para usuarios
    router.get('/api/users/', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const offset = (page - 1) * limit;

    const usuarios = await Usuario.findAll({
        limit: limit,
        offset: offset,
    });

    const totalUsuarios = await Usuario.count();
    const totalPages = Math.ceil(totalUsuarios / limit);

    const nextPage = page < totalPages ? `/api/users/?page=${page + 1}` : null;
    const prevPage = page > 1 ? `/api/users/?page=${page - 1}` : null;

    res.json({
        usuarios,
        nextPage,
        prevPage,
    });
    });


router.get('/', controller.count);
router.get('/:id', controller.detail);
router.get('/:id/img', express.static(path.resolve(__dirname,  './public/img/users')), controller.img)


module.exports = router;