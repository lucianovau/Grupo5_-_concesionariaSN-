const express = require('express');
const path = require('path');
let router = express.Router();

let controllerProductos = require('../controllers/productosController')

const validarProduct = require('../middlewares/validarProduct')
const upload = require('../middlewares/multerProducts')

router.get('/', controllerProductos.productos);
router.get('/create', controllerProductos.create);
router.post('/create', upload.array('imageProduct', 6), validarProduct , controllerProductos.store);
router.post('/search', controllerProductos.search);
router.get('/:marca', controllerProductos.filter)
router.get('/products', controllerProductos.obtenerProductosPaginados);
module.exports = router