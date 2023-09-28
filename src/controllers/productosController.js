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
        image: req.body.imageProduct 
       };
    
     productos.push(newProduct);   

    let productosJSON = JSON.stringify(productos)
    fs.writeFileSync(productsFilePath, productosJSON)
    res.redirect('/productos')
   }
} 

module.exports = controllerProductos;