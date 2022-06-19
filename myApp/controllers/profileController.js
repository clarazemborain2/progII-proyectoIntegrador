const db = require("../database/models");
let bcrypt = require('bcryptjs');

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

    },
    register : function(req, res) {
        res.render('register');
    },
    procesarRegister : function(req, res) {
        let foto = req.file.filename;
        let usuarioNuevo = {
            email: req.body.email,
            usuario: req.body.usuario,
            contra: bcrypt.hashSync(req.body.contra, 10),
            fecha_de_nacimiento: req.body.fecha,
            nro_de_documento: req.body.nro_de_documento,
            foto_de_perfil: foto
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