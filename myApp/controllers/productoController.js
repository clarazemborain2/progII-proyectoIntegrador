const data = require('../db/data')

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
 }
 
 module.exports = productoController