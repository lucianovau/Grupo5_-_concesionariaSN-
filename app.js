const express = require('express');
const { request } = require('http');
const app = express();
const path = require('path');


app.use(express.json());
app.use( express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    let ruta = path.join(__dirname + '/views/home.html');
    res.sendFile(ruta);
})

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
})

app.get('/detalleProd', (req, res) => {
        res.sendFile(__dirname + '/views/detallesProd.html');
    } )

app.get('/productCart', (req, res) => {
    res.sendFile(__dirname + '/views/productCart.html');
})

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
})

app.get('/productos', (req, res) => {
    res.sendFile(__dirname + '/views/productos.html');
})


app.listen(3000, ()=> 
    console.log('servidor corriendo'));


