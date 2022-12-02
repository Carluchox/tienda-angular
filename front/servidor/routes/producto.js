//rutas para producto
const express = require('express');
const router = express.Router();
const productoController = ('../controllers/productoController');


// api/productos
router.post('/', productoController.crearProducto);

module.exports = router;