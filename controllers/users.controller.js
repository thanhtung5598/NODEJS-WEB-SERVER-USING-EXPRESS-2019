const shortid = require('shortid');

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
    let errors = [];
    if(!req.body.name){
        errors.push('Name is requred')
    }
    
    if(!req.body.phone){
        errors.push('Phone is requred')
    }
    if(errors.length){
        res.render('users/create',{
            errors:errors,
            values:req.body
        });
        return;
    }
    db.get('users').push(req.body).write();
    res.redirect('/users');
}


