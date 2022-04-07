var express = require('express');
var router = express.Router();
let productoController = require('../controllers/productosController');

router.get('/producto', productoController.producto);

router.get('/agregarProducto', productoController.productAdd);

router.get('/editarProducto', productoController.productEdit);

module.exports = router;
