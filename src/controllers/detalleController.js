let fs = require('fs');
let path = require('path');

const productsFilePath = path.resolve(__dirname, '../data/productos.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const rutaDetalle = true

const controller = {
    // Muestra el detalle de un producto 
    detalleId: (req, res)=>{
        let ruta = path.resolve(__dirname, '../views/products/detallesProd')
        let idProd = req.params.id || 1;
        let producto = productos[idProd - 1];
        res.render(ruta, {producto, rutaDetalle})
   },
   // Muestra el formulario de edicion
   edit: (req, res) => {
        let ruta = path.resolve(__dirname, '../views/products/editProduct')
        const idProd = req.params.id;
        let producto = productos[idProd - 1];
        res.render(ruta, { producto })
   },
   // Envia el formulario de edicion
   store: (req, res) => {
        const idProd = req.params.id;
        productos[idProd - 1] = {
            id: idProd,
            name: req.body.name,
            marca: req.body.marca,
            modelo: req.body.modelo,
            descripcion: req.body.description,
            category: req.body.category,
            color: req.body.colors,
            price: req.body.price,
            fichaTecnica: req.body.fichaTecnica
        };
        let productosJSON = JSON.stringify(productos)
        fs.writeFileSync(productsFilePath, productosJSON)
        res.redirect('/productos')
   },
   // Borra un producto
   delete: (req, res) => {
        const idProd = req.params.id;
        productos.splice((idProd - 1), 1 )
        let productosJSON = JSON.stringify(productos)
        fs.writeFileSync(productsFilePath, productosJSON)
        res.redirect('/productos')
   }
}

module.exports = controller