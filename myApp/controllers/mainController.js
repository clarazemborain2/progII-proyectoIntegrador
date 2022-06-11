const { productos } = require("../db/data");
const data = require("../db/data");

let mainController = {
   index: function(req, res) {
        res.render('index', {
          productos: data.productos,
        });
        productos.findAll()
        .then(data=>{
          return res.send(data)
        })
        .catch(err=>{
          return res.send(err)
        })
      },
}

module.exports = mainController