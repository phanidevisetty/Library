const constants = require("../imports/imports").constants
exports.validateSession = (req , res, next)=>{
    var user = req.session;
    // return next();
    // console.log(req.session);
    if(user.currentUser)
    {
        return next();
    }
    else
    {
        req.session.error = constants.messages.SessionExpired;
        res.redirect('/');
    }
}
