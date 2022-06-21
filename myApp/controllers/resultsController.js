/*const db = require("../database/models");
const Producto = db.Producto; 
const op = db.Sequelize.Op;


//buscador por descripcion
let resultsController = {
search: (req, res)=> {
  let search = req.query.search;
 
  Producto.findAll({
    where: [{'descripcion': {[op.like]: `%${search}%`}}
  ],
    limit: 2,

}).then((result) => {
    return res.render('search-results', {
        productos: result,
        resultado: search
    })
})
.catch(err =>{
   console.log(err);
})
},
}
module.exports = resultsController; */