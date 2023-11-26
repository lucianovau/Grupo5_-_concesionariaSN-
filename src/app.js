// require's
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const cors = require('cors');

// express()
const app = express();

// middlewares

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware')

app.use(express.json()); // permite parsear peticiones
app.use(session({
    secret: "It's a secret",
    resave: false,
    saveUninitialized: false, 
})) ;
app.use(methodOverride('_method')) // permite usar routas con PUT y DELETE
app.use(express.static(path.resolve(__dirname,  '../public'))); // pone de manera estatica la carpeta de public
app.use(express.urlencoded({ extended: false })); // permite obtener la informacion enviada por POST
app.use(logger('dev'));
app.use(cookieParser());
app.use(cors());

//template engine
app.set('view engine', 'ejs'); // establece ejs como el modelo de plantillas 
app.set('views', './views'); // le deci a ejs que las plantillas estan en la carpeta views

// router sistem
const mainRutas = require('./routes/main')
const productosRutas = require('./routes/productos');
const detalleRutas = require('./routes/detalle');
const userRutas = require('./routes/users');
const cartRutas = require('./routes/cart');
const apiProductRoutes = require('./routes/api/productRouter');
const apiUserRoutes = require('./routes/api/userRouter');


app.use('/', mainRutas);
app.use('/productos', productosRutas);
app.use('/detalleProd', detalleRutas);
app.use('/user', userRutas);
app.use('/api/products', apiProductRoutes);
app.use('/api/users', apiUserRoutes);
app.use('/productCart', cartRutas);


app.use((req,res,next) => {
    res.status(404).render('../src/views/not-found')
})


// levantar el servidor
let port = process.env.PORT || 3030
app.listen(port, () => console.log(`servidor corriendo en el puerto ${port}`));


