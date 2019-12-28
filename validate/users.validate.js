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