const db = require("../database/models");
const Producto = db.Producto; /* El alias que le pondre a mi modelo */
const Comentario = db.Comentario
const op = db.Sequelize.Op;

let productoController = {

  show : (req, res) => {

   let product = Producto.findByPk(req.params.id, {include: [{association: 'usuario'}]})
   let comentarios = Comentario.findAll({where: {product_id: req.params.id}, include:[{association:'relacionUsuario'}], order:[['created_at','DESC']]})

   Promise.all([product, comentarios])
   .then(result =>{
    res.render('product',{productos: result[0], comentarios: result[1]})
   })

    /*let id = req.params.id;
    req.session.product = req.params.id
    Producto.findByPk(id, {include:[{association: 'usuario'}, {association: 'comentario', nested: true} ]})
    
    .then(result => {
      console.log(result.dataValues.comentario)
      return res.render("product", {
        productos: result, comentarios: result.dataValues.comentario});
        
    });*/
  },
  //buscador por nombre o descripcion 
  search: (req, res)=> {
    let search = req.query.search;
   
  Producto.findAll({
      where: {
        [op.or]: [
            {nombre : {
            [op.like] : `%${search}%`}},
          {descripcion: {[op.like]: `%${search}%` }}

    ]},
      order: [['nombre', 'DESC'],],
      limit: 10,
      include: [{association: 'usuario'}]

  })
  
  .then((result) => {
      return res.render('search-results', {
          productos: result,
          resultado: search
      })
  })
  
  .catch(err =>{
     console.log(err);
 })
  },


//product add
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
      imagen: imagen,
      usuario_id: req.session.user.id
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
      return res.render('productEdit', {productos: productoEditado})



       }
    )
    },
    update: (req,res)=>{
      let productUpdate = req.body;
      let id = req.params.id;
      let foto = req.file.filename;
      Producto.update(
        {
            nombre: productUpdate.nombre,
            descripcion: productUpdate.descripcion,
            imagen: foto
        },
        {
          where:[
            {id:id}
          ]
        }
      )
      .then((result)=>{
        return res.redirect("/")
      })
  },
  destroy:(req,res)=>{
    let id = req.params.id;
    Producto.destroy(
      {
        where:[{id:id}]
      }
    )
    .then((result)=>{
      return res.redirect("/")
    }
    )
  },

};
  
 
 module.exports = productoController


