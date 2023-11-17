const express = require('express');
const path = require('path');
let router = express.Router();

let controllerProductos = require('../controllers/detalleController')

const upload = require('../middlewares/multerProducts')
const validarProduct = require('../middlewares/validarProduct')

router.get('/', controllerProductos.detalleId);
router.get('/:id', controllerProductos.detalleId);
router.get('/:id/edit', controllerProductos.edit);
router.put('/:id/edit', validarProduct, upload.array('imageProduct', 6), controllerProductos.store);
router.get('/:id/delete', controllerProductos.delete);
router.post('/consultar', controllerProductos.consultar)
router.post('/reservar', controllerProductos.reserve)

module.exports = router