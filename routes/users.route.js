const express = require('express');
const router = express.Router();
const shortid = require('shortid');

const db = require('../db');

router.get('/', (req, res) => {
    res.render('users/user', {
        users: db.get('users').value()
    })
})

router.get('/search', (req, res) => {
    let name = req.query.name;
    let matchName = db.get('users').value().filter((user) => {
        return user.name.indexOf(name) !== -1;
    })
    res.render('users/user', {
        users: matchName
    })
})

router.get('/create', (req, res) => {
    res.render('users/create');
})

router.get('/:id', (req, res) => {
    let id = req.params.id;
    let user = db.get('users').find({ id: id }).value();
    res.render('users/view', {
        user: user
    })
})

router.post('/create', (req, res) => {
    req.body.id=shortid.generate();
    db.get('users').push(req.body).write();
    res.redirect('/users');
})


module.exports = router;
