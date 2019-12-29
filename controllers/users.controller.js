const shortid = require('shortid');
const md5 = require('md5');

const db = require('../db');

module.exports.index = (req, res) => {
    res.render('users/user', {
        users: db.get('users').value()
    })
}

module.exports.searchUserName = (req, res) => {
    let name = req.query.name;
    let matchName = db.get('users').value().filter((user) => {
        return user.name.indexOf(name) !== -1;
    })
    res.render('users/user', {
        users: matchName
    })
}

module.exports.create = (req, res) => {
    res.render('users/create');
}

module.exports.get = (req, res) => {
    let id = req.params.id;
    let user = db.get('users').find({ id: id }).value();
    res.render('users/view', {
        user: user
    })
}

module.exports.postCreate = (req, res) => {
    req.body.id = shortid.generate();
    req.body.password = md5(req.body.password);
    req.body.avatar=req.file.path.split('\\').splice(1).join('/');
    db.get('users').push(req.body).write();
    res.redirect('/users');
}


