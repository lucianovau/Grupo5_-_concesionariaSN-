let path = require("path");
let db = require('../../database/models')

let ruta = path.resolve(__dirname, "../views/products/productCart");

let rutaDetalle = true;
let rutaEdit = true;
const controller = {
  cart: (req, res) => {
    let logged 
    if (req.cookies.userEmail) {
      logged = true
    } 
    db.ProductCart.findAll()
        .then((productos)=>{
            res.render(ruta, { productos, logged, rutaDetalle });
        })
        .catch((err)=>{
            console.log(err)
        })
  },
  add: (req, res) => {
    let logged 
    if (req.cookies.userEmail) {
      logged = true
    } 
    let id = req.body.id
    db.Product.findByPk(id)
        .then((producto)=>{
            db.ProductCart.create({
                products_id: id,
                name_product: producto.name,
                price: producto.price,
                img: producto.img
            })
        })
        .then(()=>{
            return db.ProductCart.findAll()
        })
        .then((productos)=>{
            res.render(ruta, { productos, logged, rutaDetalle});
        })
        .catch((err)=>{
            console.log(err)
        })
  },
  delete: (req, res) => {
    let logged 
    if (req.cookies.userEmail) {
      logged = true
    } 
    const idProd = req.params.id;
    db.ProductCart.destroy({
      where: {id: idProd}
    })
    .then(()=>{
        return db.ProductCart.findAll()
    })
    .then((productos)=>{
        res.render(ruta, { productos, logged, rutaEdit});
    })
    .catch((err)=>{
      console.log(err)
    })
}   
};

module.exports = controller;
