/*const db = require("../database/models");
const op = db.Sequelize.Op;


let resultsController = {

 results: (req, res) => {
     let busqueda = req.query.producto;
     productos.findAll({
         where: [
             {nombre : {
                 [op.like] : "%" + busqueda + "%"
             }} 
         ]
     }).then((result) => {
         return res.render('search-results'), {
             result: productos,
             resultado: busqueda
         }
     })
     .catch(err =>{
        console.log(err);
    })
 }

};

 
 module.exports = resultsController

 //results : function(req, res) {
    //res.render('search-results')
//} */