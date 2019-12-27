const express = require('express');
const router = express.Router();

const userController = require('../controllers/users.controller')

router.get('/', userController.index);

router.get('/search', userController.searchUserName);

router.get('/create', userController.create);

router.get('/:id', userController.get);

router.post('/create', userController.postCreate);


module.exports = router;
