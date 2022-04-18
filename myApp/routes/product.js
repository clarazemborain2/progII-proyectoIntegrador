let express = require('express');
let router = express.Router();
let productoController = require('../controllers/productoController');

router.get('/', productoController.producto);

router.get('/add', productoController.productAdd);


module.exports = router;

