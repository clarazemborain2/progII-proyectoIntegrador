const db = require('../database/models')
let Comentario = db.Comentario

 //Agregar comentario

 let comentarioController = {

 procesarComment : function(req,res) {
  console.log(req.body);
    let info = req.body; //Guardamos los datos
    let usuario_id = req.session.user.id
    let producto_id = req.params.id

    let comentarioNuevo = {//creamos el comentario
     comentario: info.comentario,
     usuario_id : usuario_id,
     product_id : producto_id,
     created_at : new Date()
    }
    Comentario.create(comentarioNuevo)
    .then((result) => {
      return res.redirect("/product/id/" + req.params.id)
    })

    },
}

module.exports = comentarioController