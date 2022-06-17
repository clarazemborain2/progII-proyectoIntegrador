const db = require("../database/models");

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
        console.log(req.file);
        let usuarioNuevo = {
            email: req.body.email,
            usuario: req.body.usuario,
            contra: req.body.contra,
            fecha_de_nacimiento: req.body.fecha,
            nro_de_documento: req.body.nro_de_documento,
            foto_de_perfil: 1,
        }
        console.log(usuarioNuevo)
        db.Usuario.create(usuarioNuevo)
        .then(function (results) {
            return res.redirect('/')
        }
        ).catch((err) => console.log(err))
       
    }
 }
 
 module.exports = perfilController