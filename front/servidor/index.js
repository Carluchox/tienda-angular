const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => res.send('Hola Mundo'));
app.listen(port, () => 
    console.log(`La app corre en el puerto ${port}`)
    );