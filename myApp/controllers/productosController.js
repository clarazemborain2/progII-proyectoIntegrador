const data = require('../db/data')

let productoController = {
    producto : function(req, res) {
         res.render('product', {
             comentarios: data.comentarios,
             producto: data.lista
         });
       },
    productAdd : function(req, res) {
        res.render('product-add');
    },
 }
 
 module.exports = productoController