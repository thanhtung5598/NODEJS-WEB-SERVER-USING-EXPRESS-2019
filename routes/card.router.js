const express = require('express');
const router = express();

const cardController = require('./../controllers/card.controller')

router.get('/add/:productID',cardController.addToCard);

module.exports=router;