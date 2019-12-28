const db = require('./../db')

module.exports.get = (req,res)=>{
    let perPage = 6;
    let drop = (req.query.page-1)*perPage; // n = 2 => perPage = 8 => drop = 8
    res.render('products/index',{
        products:db.get('products').drop(drop).take(perPage).value()
    });
}