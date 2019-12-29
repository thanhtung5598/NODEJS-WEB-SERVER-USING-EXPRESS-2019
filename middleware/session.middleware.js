const shortID = require('shortid')
const db =require('./../db')

module.exports = function(req, res, next) {
    if(!req.signedCookies.sessionID){
        var sessionID = shortID.generate()
        res.cookie('sessionID',sessionID,{
            signed:true
        });
        db.get('session').push({
            id:sessionID
        }).write();
    }
   next();
}