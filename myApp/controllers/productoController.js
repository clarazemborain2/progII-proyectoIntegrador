const db = require("../database/models");
const Producto = db.Producto; /* El alias que le pondre a mi modelo */

let productoController = {
  producto : function(req, res) {
    res.render('product', {
    comentarios: data.comentarios,
    producto: data.productos
    });
  },
  productAdd : function(req, res) {
    res.render('product-add');
  },
        // empiezo a laburar con product-add
  procesarAdd : function(req,res) {
    let info = req.body; //Guardamos los datos
    let productoNuevo = {//creamos el producto
      nombre: info.nombreProducto, //los atributos que puse no son todas las columnas que hay en sql.
      descripcion: info.descripcion,
      imagen: info.imagen
    }

    Producto.create(
      productoNuevo
    )
    .then((result) => {
      return res.redirect("/index")
    })
    }
    
}

 module.exports = productoController


