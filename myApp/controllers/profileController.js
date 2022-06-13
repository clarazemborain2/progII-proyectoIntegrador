//const dataModule = require('../db/data')// no sirve mas

let perfilController = {

    perfil : function(req, res) {
         res.render('profile',  {
            usuario: dataModule.usuario,
            productos: dataModule.productos});
       },
    editarPerfil : function(req, res) {
        res.render('profile-edit', {
            usuario: dataModule.usuario}
           );
    },
    login : function(req, res) {
        res.render('login');
    },
    register : function(req, res) {
        res.render('register');
    },
 }
 
 module.exports = perfilController