let imports = require('../imports/imports');
const crypto = require('crypto');
let moment = require('moment');


exports.login = async function (req, res, next) {
    res.render('layouts/login', {
        error: req.session.error,
        success: req.session.success,
        session: req.session
    });
}
exports.clearsession = function (req, res, next) {
    req.session.error = "";
    req.session.success = "";
    res.send("ok");
}

exports.logout = function (req, res, next) {
    req.session.destroy();
    res.redirect('/');

}
exports.resetPassword = function (req, res, next) {
    res.render(imports.constants.views.ResetPassword, {
        error: req.session.error,
        success: req.session.success,
        currentUser: req.session.currentUser,
        session: req.session
    })

}

exports.UpdatePassword = function (req, res, next) {
    imports.vendors.findOne({
        email: req.session.currentUser.email
    })
        .then((getPassword) => {
            let comparision = imports.utils.compareSync(req.body.oldPassword.trim(), imports.utils.decryptedPassword(getPassword.password))
            if (!comparision) {
                req.session.error = imports.constants.messages.OldPassword
                res.redirect('back');
            } else {
                let passwords = imports.utils.encryptPassword(req.body.newPassword)
                imports.vendors.updateOne({
                    email: req.session.currentUser.email
                }, {
                    password: passwords,
                })
                    .then((result) => {
                        req.session.success = imports.constants.messages.PasswordUpdated
                        req.session.currentUser = null
                        res.redirect('/');
                    })
                    .catch((error) => {
                        req.session.error = imports.constants.messages.SystemError
                        res.redirect('back');
                    })
            }
        })
        .catch((err) => {
            req.session.error = imports.constants.messages.OldPasswordWrong
            res.redirect('back');
        })
}

exports.signup = (req, res) => {
    res.render('layouts/signup', {
        error: req.session.error,
        success: req.session.success,
        session: req.session
    })
}


exports.registerUser = async (req, res) => {
    try {
        let usersdata = await imports.Users.findOne({ $or: [{ email: req.body.email }, { phone_number: req.body.phone_number }], email_is_verified: 1 })
        usersdata = _copy(usersdata)
        if (usersdata) {
            req.session.error = imports.constants.messages.VendorExists;
            return res.redirect("back");
        }
        let hashpassword = await imports.utils.encryptPassword(req.body.password)
        let insertData = {
            name: req.body.name,
            email: req.body.email,
            phone_number: req.body.phone_number,
            password: hashpassword
        }
        let userfinaldata = await imports.Users.create(insertData)
        req.session.success = imports.constants.messages.VendorRegisteredSuccessfully;
        res.redirect('/')

    } catch (error) {
        req.session.error = imports.constants.messages.SystemError;
        res.redirect("back");
    }

}

exports.signin = async function (req, res, next) {
    imports.Users.findOne({
        email: req.body.email
    })
        .then(async function (results) {
            if (results) {
                let comparision = imports.utils.compareSync(req.body.password.trim(), imports.utils.decryptedPassword(results.password))
                if (!comparision) {
                    req.session.error = imports.constants.messages.InvalidLogin
                    res.redirect('/');
                } else {
                    delete results.password
                    req.session.currentUser = results;
                    res.redirect('/userbooks')
                }

            } else {
                req.session.error = imports.constants.messages.InvalidLogin
                res.redirect('/');
            }
        })
        .catch(function (err) {
            req.session.error = imports.constants.messages.SystemError;
            res.redirect('/');
        })
}
const _copy = e => JSON.parse(JSON.stringify(e))