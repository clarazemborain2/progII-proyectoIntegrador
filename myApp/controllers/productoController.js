const db = require("../database/models");
const Producto = db.Producto; /* El alias que le pondre a mi modelo */

let productoController = {

  show : (req, res) => {
    let id = req.params.id;

    Producto.findByPk(id)
    .then(result => {
      return res.render("product", {
        productos: result});
    });

  },

  productAdd : function(req, res) {
    res.render('product-add');
  },
        // empiezo a laburar con product-add
  procesarAdd : function(req,res) {
    let info = req.body; //Guardamos los datos
    let imagen = req.file.filename;
    let productoNuevo = {//creamos el producto
      nombre: info.nombre, //los atributos que puse no son todas las columnas que hay en sql.
      descripcion: info.descripcion,
      imagen: imagen
    }

    Producto.create(productoNuevo)
    .then((result) => {
      return res.redirect("/")
    })
  
    },
    edit: (req, res)=>{
    let id = req.params.id;
    Producto.findByPk(id)
    .then(
      (result)=>{
        let productoEditado={

      nombre: result.nombre,
      descripcion: result.descripcion,
      imagen: result.imagen,
      id:id
    }
      return res.render('productEdit', {Producto: productoEditado})



       }
    )
    },
    update: (req,res)=>{
      let productUpdate = req.body;
      let id = req.params.id;
      Producto.update(
        {
            nombre: productUpdate.nombreProducto,
            descripcion: productUpdate.descripcion,
            imagen: productUpdate.imagen
        },
        {
          where:[
            {id:id}
          ]
        }
      )
      .then((result)=>{
        return res.redirect("/index")
      })
  },
  destroy:(req,res)=>{
    let productoBorrar = req.params.id;
    Producto.destroy(
      {
        where:[{id:productoBorrar}]
      }
    )
    .then((result)=>{
      return res.redirect("/")
    }
    )
  }
};
  
 
 module.exports = productoController


