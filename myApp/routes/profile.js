let express = require('express');
let router = express.Router();
let perfilController = require('../controllers/profileController');

router.get('/', perfilController.perfil);

router.get('/profile-edit', perfilController.editarPerfil);

router.get('/login', perfilController.login); 

router.get('/register', perfilController.register); 

module.exports = router;