const db = require("../database/models");
const productos = db.Producto; /* El alias que le pondre a mi modelo */
let productoController = {
    producto : function(req, res) {
         res.render('product', {
             comentarios: data.comentarios,
             producto: data.productos
         });
       },
    productAdd : function(req, res) {
        res.render('product-add');
        // empiezo a laburar con product-add
        const agregar = {
          create: (req, res) => {
            return res.render('product-add');
        
          },
          store: function (req, res) {
            let info = req.body; //Guardamos los datos
            let productoNuevo = {//creamos el producto
              nombre: info.nombreProducto, //los atributos que puse no son todas las columnas que hay en sql.
              descripcion: info.descripcion,
              imagen: info.imagen
            }
            db.Producto.create(
              productos
            )
              .then((result) => {
                return res.redirect("/index")
              })
          },
    procesarAdd : function(req,res) {
        console.log(req.body)
        res.redirect("/")
    },
    }
    },
 }
 
 module.exports = productoController


