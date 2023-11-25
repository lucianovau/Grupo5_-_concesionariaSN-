let fs = require('fs');
let path = require('path');
const { validationResult } = require('express-validator');

const db = require('../../database/models');

const rutaDetalle = true
const rutaEdit = true

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
               res.render(ruta, {producto, logged, rutaEdit})
          })
          .catch((err)=>{
               console.log(err)
          })
   },
   // Envia el formulario de edicion
  store: (req, res) => {
        const resultValidation = validationResult(req);
        let ruta = path.resolve(__dirname, '../views/products/editProduct');
          
        if(resultValidation.errors.length > 0){
            res.render(ruta, { 
                errors: resultValidation.mapped(),
                oldData: req.body,
                rutaDetalle
            })
        }else{
          const idProd = req.params.id;
          let imagenes = req.files.map(file => '/img/productImg/' + file.filename);
          if(imagenes){
            let caracteristicas = `${req.body.caracteristicas} // ${req.body.confort} // ${req.body.seguridad}` 
                db.Product.update({
                  name: req.body.name,
                  marca: req.body.marca,
                  modelo: req.body.modelo,
                  descripcion: req.body.description,
                  category: req.body.category,
                  color: req.body.colors,
                  price: req.body.price,
                  img: imagenes.join(' '),
                  caracteristicas: caracteristicas
              }, {
                where: {id: idProd}
              })
                  .then(()=>{
                    res.redirect('/productos')
                  })
                  .catch((err)=>{
                    console.log(err)
                  })
          }else {
            let caracteristicas = `${req.body.caracteristicas} // ${req.body.confort} // ${req.body.seguridad}` 
              db.Product.update({
                name: req.body.name,
                marca: req.body.marca,
                modelo: req.body.modelo,
                descripcion: req.body.description,
                category: req.body.category,
                color: req.body.colors,
                price: req.body.price,
                caracteristicas: caracteristicas
            }, {
              where: {id: idProd}
            })
            .then(()=>{
              res.redirect('/productos')
            })
            .catch((err)=>{
              console.log(err)
            })
          }
      }
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
          return res.render(ruta, {producto, rutaEdit})
      })
      .catch((err)=>{
          console.log(err)
      })
   },
   // Consultar
   consultar: (req, res) => {
      let idProd = req.body.id;
      db.Product.findByPk(idProd)
        .then((producto) => {
          let consulta = true 
          let ruta = path.resolve(__dirname, '../views/products/detallesProd')
          res.render(ruta, {producto, consulta, rutaDetalle})
        })
   }
}

module.exports = controller