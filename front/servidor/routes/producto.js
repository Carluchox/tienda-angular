//rutas para producto
const express = require('express');
const router = express.Router();
//const productoController = ('../controllers/productoController');


// api/productos
router.post('/', (req, res) => {
    console.log(req.body);
  },
);

module.exports = router;