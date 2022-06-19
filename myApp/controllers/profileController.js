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
        let errors = {};//declaro variables para mostrar errores en la vista
        let errorscontra = {}
        let contraEncriptada = bcrypt.hashSync(req.body.contra, 10);
        if(req.body.email == "") {//para cuando email este vacio
            errors.message = "El email no puede estar vacío.";
            //res.locals.error = errors;
            return res.render('registracion'); 
          } else if(req.body.contra.length < 2) {//para passwords con menos de 2 caracteres
              errorscontra.message = "La contraseña debe tener al menos 3 caracteres";
              res.locals.error = errorscontrasenia; 
              return res.render('registracion');}
        let usuarioNuevo = {
            email: req.body.email,
            usuario: req.body.usuario,
            contra: contraEncriptada,
            fecha_de_nacimiento: req.body.fecha,
            nro_de_documento: req.body.nro_de_documento,
            foto_de_perfil: req.file //multer
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