//const data = require('../db/data')// no sirve 

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
    procesarAdd : function(req,res) {
        console.log(req.body)
        res.redirect("/")
    },
 }
 
 module.exports = productoController