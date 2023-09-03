const express = require('express');
const multer = require('multer');
const path = require('path')
let router = express.Router();


let controllerProductos = require('../controllers/productosController')

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

router.get('/', controllerProductos.productos);
router.get('/create', controllerProductos.create);
router.post('/create', upload.single('image'),controllerProductos.store);

module.exports = router