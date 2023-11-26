let path = require("path");
const controller = {
  home: (req, res) => {
    let logged 
    if (req.cookies.userEmail) {
      logged = true
    } 
    let ruta = path.resolve(__dirname, "../views/home");
    res.render(ruta, { logged });
  }
}

module.exports = controller;
