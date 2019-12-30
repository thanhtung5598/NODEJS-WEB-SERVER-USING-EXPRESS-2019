const shortid = require('shortid');
const md5 = require('md5');

const Users = require('./../models/users.model')

module.exports.index = async (req, res) => {
    var users = await Users.find();
    res.render('users/user', {
        users
    })
}

module.exports.searchUserName = async (req, res) => {
    var name = req.query.name;
    var users = await Users.find();
    var matchName = users.filter((user) => {
        return user.name.indexOf(name) !== -1;
    })
    
    res.render('users/user', {  
        users: matchName
    })
}

module.exports.create = (req, res) => {
    res.render('users/create');
}

module.exports.get = async (req, res) => {
    var id = req.params.id;
    var user = await Users.find({ id: id });
    
    res.render('users/view', {
        user:user[0]
    })
}

module.exports.postCreate = (req, res) => {
    req.body.id = shortid.generate();
    req.body.password = md5(req.body.password);
    req.body.avatar = req.file.path.split('\\').splice(1).join('/');
    Users.create(req.body,(err,res)=>{
        if(err) throw err;
        console.log("Inserted");
    })
    res.redirect('/users');
}


