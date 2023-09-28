const express = require('express');
const path = require('path');
let router = express.Router();

let controllerProductos = require('../controllers/detalleController')

const upload = require('../middlewares/multerProducts')

router.get('/', controllerProductos.detalleId);
router.get('/:id', controllerProductos.detalleId);
router.get('/:id/edit', controllerProductos.edit);
router.put('/:id/edit', upload.array('imageProduct', 6), controllerProductos.store);
router.get('/:id/delete', controllerProductos.delete);

module.exports = router