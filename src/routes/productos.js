const express = require('express');
let router = express.Router();

let controllerProductos = require('../controllers/productosController')

router.get('/', controllerProductos.productos);
router.get('/create', controllerProductos.create);
router.post('/create', controllerProductos.store);

module.exports = router