let express = require('express');
let router = express.Router();
const path = require('path');
let productoController = require('../controllers/productoController');
let comentarioController = require('../controllers/comentarioController');

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

//get
router.get('/id/:id', upload.single('imagen'), productoController.show);
router.get('/busqueda/', productoController.search);
router.get('/add', productoController.productAdd);
router.get('/editProduct/:id', productoController.edit);
router.get('/delete/:id', productoController.destroy);

//post
router.post('/editProduct/:id', upload.single('imagen'), productoController.update);
router.post('/add', upload.single('imagen'), productoController.procesarAdd);
router.post('/id/:id', comentarioController.procesarComment);



module.exports = router;

