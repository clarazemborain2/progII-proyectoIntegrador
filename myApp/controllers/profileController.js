const db = require("../database/models");
let bcrypt = require("bcryptjs");
const usuario = db.Usuario;

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
        return res.render('login');
    },
    procesarLogin : function(req, res) {
        let info = req.body;
        usuario.findOne({
            where: [{email : info.email}]
        }).then((result)=> { //el result me trae toda la info del usuario de db
            if (result != null) {
                let contraCorrecta = bcrypt.compareSync(info.password , result.password) //comparo la clave que ingreso el usuario en el formulario y la comparo con la clave que me trae el result
                //el result.password viene hasheado 
                if(contraCorrecta) {  
                    req.session.usuario = result.dataValues;

                    /* evaluar si el checkbox esta en true o existe */

                    if(req.body.recordar != undefined){
                        res.cookie('userId', req.session.usuario.id, { maxAge: 1000 * 60 * 5 })
                    }

                    console.log(req.session.usuario);
                    return res.render("index", )
                } else {
                    return res.send("La clave es incorrecta")
                }
            } else {
                return res.send("No existe el mail " +info.email)
            }
        });
            
    },
    register : function(req, res) {
        res.render('register');
    },
    procesarRegister : function(req, res) {
        let foto = req.file.filename;
        let info = req.body;
        let contraEncriptada = bcrypt.hashSync(info.contra, 10)
        let usuarioNuevo = {
            email: info.email,
            usuario: info.usuario,
            contra: contraEncriptada,
            fecha_de_nacimiento: info.fecha,
            nro_de_documento: info.nro_de_documento,
            foto_de_perfil: foto
        }
        
        usuario.create(usuarioNuevo)
        .then(function (result) {
            return res.redirect('/profile/login')
        })
        .catch((err) => console.log(err))
       
    }
 }
 
 module.exports = perfilController