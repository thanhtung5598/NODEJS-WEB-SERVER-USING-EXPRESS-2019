const md5 = require('md5');
const db = require('./../db');

module.exports.postCreate = (req,res,next)=>{
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
    next();
}
module.exports.authValidate = (req,res,next)=>{
    let email = req.body.email;
    let password = req.body.password;
    let user = db.get('users').find({email:email}).value();
    if(!user){
        res.render('auth/login',{
            errors:[
                'User is not exist'
            ],
            values:req.body
        });
        return;
    }
    let hasPassword = md5(password);
    if(user.password!==hasPassword){
        res.render('auth/login',{
            errors:[
                'Wrong password'
            ],
            values:req.body
        });
        return;
    }
    res.cookie('userID',user.id,{
        signed:true
    });
    next();
}