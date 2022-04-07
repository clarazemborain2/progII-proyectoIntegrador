let productoController = {
    producto : function(req, res) {
         res.render('product');
       },
    productAdd : function(req, res) {
        res.render('product-add');
    },
    productEdit : function(req, res) {
        res.render('product-edit');
    },
 }
 
 module.exports = productoController