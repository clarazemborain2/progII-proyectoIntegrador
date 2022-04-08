let express = require('express');
let router = express.Router();
let productoController = require('../controllers/productosController');

router.get('/', productoController.producto);

router.get('/agregarProducto', productoController.productAdd);

router.get('/editarProducto', productoController.productEdit); 

module.exports = router;
