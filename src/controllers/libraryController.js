const imports = require("../imports/imports");
var ObjectId = require('mongoose').Types.ObjectId;

exports.showUserbooks = function (req, res, next) {
    // imports.Books.find({
    //     is_active: 1,
    // })
    imports.Books
        .aggregate([
            {
                $match: {
                    is_active: 1,
                }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "user_id",
                    foreignField: "_id",
                    as: "usersdata",
                },
            },
            {
                $unwind: {
                  path: "$usersdata",
                  "preserveNullAndEmptyArrays": true
                }
            },
            {
                $project: {
                    _id: 1,
                    book_name: 1,
                    user_id: 1,
                    "usersdata.name": 1,
                    is_active: 1,
                    is_selected:1
                },
            },
        ])
    
        .then(libraryResp => {
            res.render("library/librarylist", {
                error: req.session.error,
                success: req.session.success,
                libraryResp,
                session: req.session,
            });
        })
        .catch(error => {
            req.session.error = imports.constants.messages.SystemError;
            res.redirect("back");
        })
}
exports.addBook = async function (req, res, next) {
    res.render("library/addbook", {
        error: req.session.error,
        success: req.session.success,
        session: req.session,
    });
}
exports.insertBook = async function (req, res, next) {
    let reqdata = req.body
    let insert_obj = {
        book_name: reqdata.book_name,
        user_id: req.session.currentUser._id,
        is_active: 1,
        is_selected: 1
    }
    imports.Books.create(insert_obj)
        .then((Resp) => {
            req.session.success = imports.constants.messages.userbook;
            res.redirect('/library')
        })
        .catch((usererr) => {
            req.session.error = imports.constants.messages.SystemError;
            res.redirect("back");
        });
}
exports.deletelibrary = async function (req, res, next) {
    imports.Books
        .findOneAndDelete({
            _id: req.params.id,
        })
        .then((deleted) => {
            res.send({
                status: true,
                data: {},
            });
        })
        .catch((err) => {
            res.send({
                status: false,
                data: {},
            });
        });
}
