let express = require('express');
let router = express.Router();
let productoController = require('../controllers/productoController');

router.get('/:id', productoController.producto);

router.get('/add', productoController.productAdd);
router.post('/add', productoController.procesarAdd);



module.exports = router;

