let perfilController = {
    perfil : function(req, res) {
         res.render('profile');
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