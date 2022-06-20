const db = require('../database/models')
let Producto = db.Producto
let mainController = {

   index: function(req, res) {

    let counter = req.session.contador;
    if (counter != undefined){
      counter +=1
    } else {
      counter = 1
    }

    req.session.contador = counter;

        Producto.findAll()
        .then(result=>{
          console.log(result);
          return res.render('index', {
            productos: result,
            contador: req.session.contador})
        })
        .catch(err=>{
          return res.send(err)
        })
      },
}

module.exports = mainController