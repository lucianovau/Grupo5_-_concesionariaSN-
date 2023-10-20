let fs = require('fs');
let path = require('path');

const db = require('../../database/models');

const rutaDetalle = true

const controller = {
    // Muestra el detalle de un producto 
     detalleId: (req, res) => {
          let logged 
    if (req.cookies.userEmail) {
      logged = true
    } 
        let ruta = path.resolve(__dirname, '../views/products/detallesProd')
        db.Product.findByPk(req.params.id || 1)
          .then((producto)=>{
               res.render(ruta, {producto, rutaDetalle, logged})
          })
          .catch((err)=>{
               console.log(err)
          })
   },
   // Muestra el formulario de edicion
     edit: (req, res) => {
        let logged 
    if (req.cookies.userEmail) {
      logged = true
    } 
        let ruta = path.resolve(__dirname, '../views/products/editProduct')
        db.Product.findByPk(req.params.id)
          .then((producto)=>{
               res.render(ruta, {producto, logged})
          })
          .catch((err)=>{
               console.log(err)
          })
   },
   // Envia el formulario de edicion
   store: (req, res) => {
        const idProd = req.params.id;
        db.Product.update({
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
        }, {
          where: {id: idProd}
        })
        .then(()=>{
          res.redirect('/productos')
        })
        .catch((err)=>{
          console.log(err)
        })
   },
   // Borra un producto
   delete: (req, res) => {
        const idProd = req.params.id;
        db.Product.destroy({
          where: {id: idProd}
        })
        .then(()=>{
          res.redirect('/productos')
        })
        .catch((err)=>{
          console.log(err)
        })
   },
   // Reservar
   reserve: (req, res) => {
      let idProd = req.body.id;
      db.Product.findByPk(idProd)
      .then((producto)=>{
          let ruta = path.resolve(__dirname, '../views/products/productCart')
          return res.render(ruta, {producto})
      })
      .catch((err)=>{
          console.log(err)
      })
   }
}

module.exports = controller