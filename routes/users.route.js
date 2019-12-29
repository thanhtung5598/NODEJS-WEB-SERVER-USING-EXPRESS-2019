const express = require('express');
const router = express.Router();
const multer  = require('multer')

const userController = require('../controllers/users.controller');
const usersValidate = require('../validate/users.validate');
const upload = multer({ dest: './public/uploads' })

router.get('/',userController.index);

router.get('/cookie',(req,res)=>{
    res.cookie('user-id',123456);
    res.send('Hello world');
})

router.get('/search', userController.searchUserName);

router.get('/create', userController.create);

router.get('/:id', userController.get);

router.post('/create',
    upload.single('avatar'),
    usersValidate.postCreate,
    userController.postCreate
);

module.exports = router;
