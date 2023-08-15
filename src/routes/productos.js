const express = require('express');
let router = express.Router();

let controllerProductos = require('../controllers/productosController')

router.get('/productos', controllerProductos.productos);
router.get('/detalleProd', controllerProductos.detalle);
router.get('/detalleProd/:id', controllerProductos.detalleId);

module.exports = router