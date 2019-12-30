const mongoose = require('mongoose');

var productsSchema = new mongoose.Schema({
    id: String,
    name: String,
    image: String,
    description: String
});

var Products = mongoose.model('Products', productsSchema, 'products');

module.exports = Products;