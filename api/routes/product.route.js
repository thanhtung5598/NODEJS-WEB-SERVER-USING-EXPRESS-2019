const express = require('express');
const router = express();

const productList = require('./../controllers/product.controller')

router.get('/',productList.get);

module.exports=router;