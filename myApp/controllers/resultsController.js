let resultsController = {
    results : function(req, res) {
         res.render('search-results')
 },
 showOne: (req, res) => {
     let busqueda = req.query.producto;
     productos.findOne({
         where: [
             {nombre : {
                 [op.like] : "%" + busqueda + ""
             }} /*op.like no funciona*/
         ]
     }).then((result) => {
         return res.send(result);
     })
 }

};
 
 module.exports = resultsController