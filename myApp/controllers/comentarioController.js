const db = require('../database/models')
let Comentario = db.Comentario

 //Agregar comentario

 let comentarioController = {
 procesarComment : function(req,res) {
    let info = req.body; //Guardamos los datos
    let id = req.params.id;
    let comentarioNuevo = {//creamos el comentario
     comentario: info.comentario,
     id : id
    }
    Comentario.create(comentarioNuevo)
    .then((result) => {
      return res.redirect("/product")
    })
  
    }

}

module.exports = comentarioController