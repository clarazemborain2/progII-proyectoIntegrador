let express = require('express');
const path = require('path');
let router = express.Router();
let mainController = require('../controllers/mainController');
/* GET home page. */
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

router.get('/', upload.single('imagen'), mainController.index);



module.exports = router;

