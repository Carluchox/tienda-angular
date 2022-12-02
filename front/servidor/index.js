const express = require('express');
const app = express();
const port = 4000;
const conectarDB = require('./config/db');

//conectamos a la BD
conectarDB();

app.use('/api/productos', require('./routes/producto'));

//Definimos ruta principal
//app.get('/', (req, res) => res.send('Hola Mundo'));

app.listen(port, () => 
    console.log(`La app corre en el puerto ${port}`));