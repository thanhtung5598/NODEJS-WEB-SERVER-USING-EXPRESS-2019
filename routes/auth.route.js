const express = require('express');
const router = express();

const authentication = require('./../controllers/auth.controller')
const authValidate = require('./../validate/users.validate');

router.get('/login',authentication.login);
router.post('/login',authValidate.authValidate,authentication.postLogin);

module.exports = router;