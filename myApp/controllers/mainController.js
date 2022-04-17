const data = require("../db/data");


let mainController = {
   index: function(req, res) {
        res.render('index', {
          productos: data.productos,
        });
      },
    
    
}

module.exports = mainController