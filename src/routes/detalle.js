const express = require('express');
const multer = require('multer');
const path = require('path');
let router = express.Router();

let controllerProductos = require('../controllers/detalleController')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../public/img/product-img'))
    },
    filename: (req, file, callback) => {

        const newFilename = 'prod-' + Date.now + path.extname(file.originalfilename);
        callback(null, newFilename);
    }
});

const upload = multer({ storage });


router.get('/', controllerProductos.detalleId);
router.get('/:id', controllerProductos.detalleId);
router.get('/:id/edit', controllerProductos.edit);
router.put('/:id/edit', upload.single('imageUsuario'), controllerProductos.store);
router.get('/:id/delete', controllerProductos.delete);

module.exports = router