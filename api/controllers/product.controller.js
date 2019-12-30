const Products = require('../../models/producs.model')

module.exports.get = async (req,res)=>{
    let products = await Products.find();
    res.json(products);
}