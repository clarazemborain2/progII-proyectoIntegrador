let express = require('express');
let router = express.Router();
let productoController = require('../controllers/productoController');

router.get('/id/:id', productoController.show);

router.get('/add', productoController.productAdd);
router.post('/add', productoController.procesarAdd);

router.get('/editProduct/:id', productoController.edit);
router.post('/editProduct/:id', productoController.update);

module.exports = router;

