const Producto = require("../database/models/Producto");// esto sirve


let mainController = {
   index: function(req, res) {
        Producto.findAll()
        .then(result=>{
          return res.render('index', {Producto: result})
        })
        .catch(err=>{
          return res.send(err)
        })
      },
}

module.exports = mainController