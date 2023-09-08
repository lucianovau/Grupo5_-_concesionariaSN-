let path = require("path");
const controller = {
  home: (req, res) => {
    let ruta = path.resolve(__dirname, "../views/home");
    res.render(ruta);
  },
  
  cart: (req, res) => {
    let ruta = path.resolve(__dirname, "../views/products/productCart");
    res.render(ruta);
  },
};

module.exports = controller;
