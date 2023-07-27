const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    let ruta = path.join(__dirname + '/views/home.html');
    res.sendFile(ruta);
})

app.listen(3000, ()=> 
    console.log('servidor corriendo'));


