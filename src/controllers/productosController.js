let fs = require('fs');
let path = require('path');
const multer = require('multer');
const sequelize = require('sequelize')

const db = require('../../database/models');

const controllerProductos = {
    // muestra todos los productos
    productos: (req, res) => {
        let logged 
    if (req.cookies.userEmail) {
      logged = true
    } else {
      logged = false
    }
        let ruta = path.resolve(__dirname, '../views/products/productos');
        db.Product.findAll()
          .then((productos)=>{
               res.render(ruta, {productos, logged});
             })
          .catch((err)=>{
               console.log(err)
             })
    },
   // Muestra el formulario de creacion
    create: (req, res) => {
        let logged 
    if (req.cookies.userEmail) {
      logged = true
    } else {
      logged = false
    }
        let ruta = path.resolve(__dirname, '../views/products/createProduct');
        res.render(ruta, {
            logged
        });
   },
   // Guarda el nuevo producto
    store: (req, res) => {
       
        db.Product.create({
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
        }) 
        .then(()=>{
          res.redirect('/productos')
        })
        .catch((err)=>{
          console.log(err)
        })
   }
} 

module.exports = controllerProductos;