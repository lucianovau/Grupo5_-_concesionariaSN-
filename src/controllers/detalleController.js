let fs = require('fs');
let path = require('path');

const productsFilePath = path.resolve(__dirname, '../data/productos.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const rutaDetalle = true

const controller = {
    // Muestra el detalle de un producto 
     detalleId: (req, res) => {
          let logged 
    if (req.cookies.userEmail) {
      logged = true
    } else {
      logged = false
    }
     let guest 
    if (req.cookies.userGuest) {
      guest = true
    } else {
      guest = false
    }
        let ruta = path.resolve(__dirname, '../views/products/detallesProd')
        let idProd = req.params.id || 1;
        let producto = productos[idProd - 1];
        res.render(ruta, {producto, rutaDetalle, logged, guest})
   },
   // Muestra el formulario de edicion
     edit: (req, res) => {
        let logged 
    if (req.cookies.userEmail) {
      logged = true
    } else {
      logged = false
    }
        let ruta = path.resolve(__dirname, '../views/products/editProduct')
        const idProd = req.params.id;
        let producto = productos[idProd - 1];
        res.render(ruta, { producto, logged })
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
            fichaTecnica: req.body.fichaTecnica,
            img1: ('/img/productImg/' + req.files[0].filename),
            img2: ('/img/productImg/' + req.files[1].filename),
            img3: ('/img/productImg/' + req.files[2].filename),
            img4: ('/img/productImg/' + req.files[3].filename),
            img5: ('/img/productImg/' + req.files[4].filename),
            img6: ('/img/productImg/' + req.files[5].filename)
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