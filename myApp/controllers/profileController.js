const db = require("../database/models");
let bcrypt = require("bcryptjs");
const usuario = db.Usuario;

let perfilController = {

    register : function(req, res) {
        res.render('register');
    },
    procesarRegister : function(req, res) {
        let info = req.body;
        /*validaciones del form*/
        let errors = {};

        if(info.usuario == ""){
            errors.message = "El input de usuario esta vacio";
            res.locals.errors = errors;
            return res.render('register')

        } else if (info.email == ""){
            errors.message = "El input de email esta vacio";
            res.locals.errors = errors;
            return res.render('register')

        }  else if (info.contra == ""){
            errors.message = "El input de password esta vacio";
            res.locals.errors = errors;
            return res.render('register')
        
        }  else {
            let foto = req.file.filename;
            let contraEncriptada = bcrypt.hashSync(info.contra, 10)
            let usuarioNuevo = {
            email: info.email,
            usuario: info.usuario,
            contra: contraEncriptada,
            fecha_de_nacimiento: info.fecha_de_nacimiento,
            nro_de_documento: info.nro_de_documento,
            foto_de_perfil: foto
        }
        
        usuario.create(usuarioNuevo)
        .then(function (result) {
            return res.redirect('/profile/login')
        })
        .catch((err) => console.log(err))

        }
       
    },   

    login : function(req, res) {
        return res.render('login');
    },
    procesarLogin : function(req, res) {
        let info = req.body;
        let errors = {};
        
        if(info.email == ""){
            errors.message = "El input de email esta vacio";
            res.locals.errors = errors;
            return res.render('login')

        } else if (info.contra == ""){
            errors.message = "El input de contraseña esta vacio";
            res.locals.errors = errors;
            return res.render('login')
            
        } else {
            usuario.findOne({
                where: [{email : info.email}]
            }).then((result)=> { //el result me trae toda la info del usuario de db
                if (result != null) {
                    let contraCorrecta = bcrypt.compareSync(info.contra , result.contra) //comparo la clave que ingreso el usuario en el formulario y la comparo con la clave que me trae el result
                    //el result.contra viene hasheado 
                    if(contraCorrecta) {  
                        req.session.user = result.dataValues; //session.user variable que muestra los resultados de usario
    
                        /* evaluar si el checkbox esta en true o existe */
    
                        if(req.body.recordar != undefined){
                            res.cookie('userId', req.session.user.id, { maxAge: 1000 * 60 * 5 })
                        }
    
                        console.log(req.session.user);
                        return res.redirect("/profile/id/" + req.session.user.id)
                        
                    } else {
                        errors.message = "La clave es incorrecta"
                        res.locals.errors = errors;
                        return res.render('login')
                    }
                    
                } else{
                    errors.message = "No existe el email " + info.email
                    res.locals.errors = errors;
                    return res.render('login')
                } 
            });
        }

       
            
    },
    indexEditar: function(req, res) {
        let id = req.params.id; 
        if(req.session.user != undefined){
            usuario.findByPk(id)
            .then(usuario =>{
                return res.render('profile-edit', {usuario: usuario});
            })  
        } else {
            res.redirect("/profile/login")
        }
        },
    editarPerfil : function(req,res){
        let info = req.body;
        let foto = req.file.filename;
        let id = req.params.id; 
        let contraEncriptada = bcrypt.hashSync(info.contra, 10)
        usuario.update({
            email: info.email,
            usuario: info.usuario,
            contra: contraEncriptada,
            fecha_de_nacimiento: info.fecha_de_nacimiento,
            nro_de_documento: info.nro_de_documento,
            foto_de_perfil: foto
        }, 
        {where: [{
                id:id
            }]
        }).then(res.redirect('/profile'))
        .catch(error =>{
            console.log(
                error
            );
            res.send(error)
        })
    },
   

    show: (req,res) => {
        let id = req.params.id; 
       
        usuario.findByPk(id, {
            include: [{association: 'producto'}]
        })
        .then(result=>{
            console.log(result);
            return res.render("profile", {usuario: result, productos: result.dataValues});
        })
    },

    logout: (req,res) => {
        req.session.destroy();
        res.clearCookie('userId')
        return res.redirect('/')
      },
 }
 
 module.exports = perfilController