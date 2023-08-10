const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')

app.use(express.json());
app.use(methodOverride('_method'))
app.use( express.static(path.resolve(__dirname,  '../public')));

app.set('view engine', 'ejs');
app.set('views', './views');

let mainRutas = require('./routes/main')

app.use('/', mainRutas);

let port = process.env.PORT || 3000
app.listen(port, () => console.log(`servidor corriendo en el puerto ${port}`));


