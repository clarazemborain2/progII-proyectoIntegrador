const db = require("../database/models");
let bcrypt = require('bcryptjs');

let perfilController = {

    perfil : function(req, res) {
         res.render('profile',  {
            usuario: db.Usuario,
            productos: db.Producto});
       },
    editarPerfil : function(req, res) {
        res.render('profile-edit', {
            usuario: db.Usuario}
           );
    },
    login : function(req, res) {
        res.render('login');
    },
    procesarLogin : function(req, res) {
        
    },
    register : function(req, res) {
        res.render('register');
    },
    procesarRegister : function(req, res) {
        let imagen = req.file.filename;
        let usuarioNuevo = {
            email: req.body.email,
            usuario: req.body.usuario,
            contra: contraEncriptada,
            fecha_de_nacimiento: req.body.fecha,
            nro_de_documento: req.body.nro_de_documento,
            foto_de_perfil: imagen
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