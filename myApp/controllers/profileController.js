const dataModule = require('../db/data')

let perfilController = {

    perfil : function(req, res) {
         res.render('profile',  {
            usuario: dataModule.usuario,
            productos: dataModule.lista});
       },
    editarPerfil : function(req, res) {
        res.render('profile-edit');
    },
    login : function(req, res) {
        res.render('login');
    },
    register : function(req, res) {
        res.render('register');
    },
 }
 
 module.exports = perfilController