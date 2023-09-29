let fs = require('fs');
let path = require('path');
const multer = require('multer');
const Product = require('../models/product');

const productsFilePath = path.resolve(__dirname, '../data/productos.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controllerProductos = {
    // muestra todos los productos
    productos: (req, res) => {
        let ruta = path.resolve(__dirname, '../views/products/productos');
        res.render(ruta, {productos});
    },
   // Muestra el formulario de creacion
   create: (req, res) => {
        let ruta = path.resolve(__dirname, '../views/products/createProduct');
        res.render(ruta);
   },
   // Guarda el nuevo producto
   store: (req, res) => {
    const newProduct = {
        id: productos.length + 1,
        name: req.body.name,
        marca: req.body.marca,
        modelo: req.body.modelo,
        descripcion: req.body.descripcion,
        category: req.body.category,
        color: req.body.colors,
        price: req.body.price,
        fichaTecnica: req.body.fichaTecnica,
        img1: ('/img/productImg/' + req.files[0].filename),
        img2: ('/img/productImg/' + req.files[1].filename),
        img3: ('/img/productImg/' + req.files[2].filename),
        img4: ('/img/productImg/' + req.files[3].filename),
        img5: ('/img/productImg/' + req.files[4].filename),
        img6: ('/img/productImg/' + req.files[5].filename)
       };
    
     productos.push(newProduct);   

    let productosJSON = JSON.stringify(productos)
    fs.writeFileSync(productsFilePath, productosJSON)
    res.redirect('/productos')
   }
} 

module.exports = controllerProductos;