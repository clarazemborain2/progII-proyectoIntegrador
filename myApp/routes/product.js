let express = require('express');
let router = express.Router();
const path = require('path');
let productoController = require('../controllers/productoController');

let multer = require('multer');

let storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, '../public/images/products'))
    },
    filename : function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});
let upload = multer({ storage : storage})

router.get('/id/:id', upload.single('imagen'), productoController.show);

router.get('/add', productoController.productAdd);
router.post('/add', upload.single('imagen'), productoController.procesarAdd);

router.get('/editProduct/:id', productoController.edit);
router.post('/editProduct/:id', productoController.update);


module.exports = router;

