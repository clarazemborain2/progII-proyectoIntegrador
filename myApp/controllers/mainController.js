const db = require('../database/models')
let Producto = db.Producto
let mainController = {
   index: function(req, res) {
        Producto.findAll()
        .then(result=>{
          console.log(result);
          return res.render('index', {productos: result})
        })
        .catch(err=>{
          return res.send(err)
        })
      },
}

module.exports = mainController