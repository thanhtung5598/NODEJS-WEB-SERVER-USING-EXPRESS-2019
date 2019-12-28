const db = require('../db')

module.exports.requireAuth = (req,res,next)=>{
    if(!req.cookies.userID){
        res.redirect('/auth/login');
        return;
    }
    let user = db.get('users').find({id:req.cookies.userID}); 
    if(!user){
        res.redirect('/auth/login');
        return;
    }
    next();
}