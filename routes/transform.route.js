const express = require('express');
const router = express();

const controller = require('./../controllers/transform.controller')

router.get('/create',controller.get);
router.post('/create',controller.postCreate);

module.exports=router;
