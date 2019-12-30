const Products = require('../../models/producs.model')

module.exports.get = async (req,res)=>{
    let products = await Products.find();
    res.json(products);
}
module.exports.create = async (req,res)=>{
    var product = await Products.create(req.body);
    res.json(product);
}