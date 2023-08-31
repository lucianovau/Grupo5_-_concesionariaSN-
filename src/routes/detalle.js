const express = require('express');
let router = express.Router();

let controllerProductos = require('../controllers/detalleController')

router.get('/', controllerProductos.detalleId);
router.get('/:id', controllerProductos.detalleId);
router.get('/:id/edit', controllerProductos.edit);
router.put('/:id/edit', controllerProductos.store);
router.delete('/:id/edit', controllerProductos.delete);

module.exports = router