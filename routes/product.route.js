const express = require('express');
const router = express();

const productList = require('./../controllers/products.controller')

router.get('/',productList.get);

module.exports=router;
