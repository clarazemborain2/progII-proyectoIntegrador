let express = require('express');
const path = require('path');
let router = express.Router();
let perfilController = require('../controllers/profileController');

// trabajando con multer

let multer = require('multer');

let storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, '../public/images/users'))
    },
    filename : function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});
let upload = multer({ storage : storage})


router.get('/', perfilController.perfil);

router.get('/profile-edit', perfilController.editarPerfil);

router.get('/login', perfilController.login); //va a llamar al metodo login que renderisa la vista
router.post('/login', perfilController.procesarLogin); //de metodo post para que me procese el login del formulario

router.get('/register', perfilController.register); 
router.post('/register', upload.single('imagen'), perfilController.procesarRegister);
 

module.exports = router;