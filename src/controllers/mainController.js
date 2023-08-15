let path = require('path')
const controller = {
    home: (req, res) => {
        let ruta = path.resolve(__dirname, '../views/home');
        res.render(ruta);
    },
    login: (req, res) => {
        let ruta = path.resolve(__dirname, '../views/users/login');
        res.render(ruta);
    },
    registro: (req, res) => {
        let ruta = path.resolve(__dirname, '../views/users/register');
        res.render(ruta);
    },
    detalle: (req, res)=>{
        let ruta = path.resolve(__dirname, '../views/products/detallesProd')
        res.render(ruta)
    },
    productos: (req, res) => {
        let ruta = path.resolve(__dirname, '../views/products/productos');
        res.render(ruta);
    },
    cart: (req, res) => {
        let ruta = path.resolve(__dirname, '../views/products/productCart')
        res.render(ruta)
    }
}

module.exports = controller