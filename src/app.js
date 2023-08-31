// require's
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// express()
const app = express();

// middlewares
app.use(express.json()); // permite parsear peticiones
app.use(methodOverride('_method')) // permite usar routas con PUT y DELETE
app.use(express.static(path.resolve(__dirname,  '../public'))); // pone de manera estatica la carpeta de public
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(cookieParser());

//template engine
app.set('view engine', 'ejs'); // establece ejs como el modelo de plantillas 
app.set('views', './views'); // le deci a ejs que las plantillas estan en la carpeta views

// router sistem
const mainRutas = require('./routes/main')
const productosRutas = require('./routes/productos');
const detalleRutas = require('./routes/detalle')

app.use('/', mainRutas);
app.use('/productos', productosRutas);
app.use('/detalleProd', detalleRutas);

// levantar el servidor
let port = process.env.PORT || 3000
app.listen(port, () => console.log(`servidor corriendo en el puerto ${port}`));


