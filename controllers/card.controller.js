const db = require('./../db');

module.exports.addToCard = (req, res, next) => {
    var sessionID = req.signedCookies.sessionID;
    var productID = req.params.productID;

    var count =  db.get('session').find({id:sessionID}).get('card.'+ productID,0).value();
    
    db.get('session')
        .find({id:sessionID})
        .set('card.'+ productID ,count + 1)
        .write();
    res.redirect('/products')
}  
