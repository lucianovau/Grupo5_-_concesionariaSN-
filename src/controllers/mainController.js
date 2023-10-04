let path = require("path");
const controller = {
  home: (req, res) => {
    let logged 
    if (req.cookies.userEmail) {
      logged = true
    } else {
      logged = false
    }
    let ruta = path.resolve(__dirname, "../views/home");
    res.render(ruta, {
      logged
    });
  },
  
  cart: (req, res) => {
    let logged 
    if (req.cookies.userEmail) {
      logged = true
    } else {
      logged = false
    }
    let ruta = path.resolve(__dirname, "../views/products/productCart");
    res.render(ruta, {
      logged
    });
  },
};

module.exports = controller;
