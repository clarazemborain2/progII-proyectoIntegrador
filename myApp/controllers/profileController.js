const db = require('../database/models');

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
    procesarLogin : function(req, res) {
         console.log(req.body);
         res.redirect("/profile")
    },
    register : function(req, res) {
        res.render('register');
    },
    procesarRegister : function(req, res) {
        let usuarioNuevo = {
            email: req.body.email,
            usuario: req.body.nombre,
            contrasenia: req.body.contrasenia,
            fecha_de_nacimiento: req.body.fecha_de_nacimiento,
            nro_de_documento: req.body.nro_de_documento,
            foto_de_perfil: req.body.foto_de_perfil,
        }
        db.Usuario.create(usuarioNuevo)
        .then(function (results) {
            return res.redirect('/profile')
        }
        )
       
    }
 }
 
 module.exports = perfilController