const shortid = require('shortid');
const db = require('../db');

module.exports.get = (req, res) => {
    res.render('transform/index',{ csrfToken: req.csrfToken() })
}

module.exports.postCreate = (req, res) => {
    var data = {
        id:shortid.generate(),
        userID:req.signedCookies.userID,
        amount:parseInt(req.body.amount),
        accountID:req.body.accountID
    }
    db.get('transforms').push(data).write();
    res.redirect('/transform/create');
}

