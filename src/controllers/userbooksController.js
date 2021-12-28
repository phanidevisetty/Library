const imports = require("../imports/imports");
var ObjectId = require('mongoose').Types.ObjectId;

exports.showUserbooks = function (req, res, next) {
    //  Return employee location
    let wherecond = {}
    if (req.session.currentUser.name !== 'admin') {
        wherecond.user_id = ObjectId(req.session.currentUser._id)
    }
    imports.Userbooks
        .aggregate([
            {
                $match: wherecond
            },
            {
                $sort: { 'created_at': 1 },
            },
            {
                $lookup: {
                    from: "books",
                    localField: "user_book_id",
                    foreignField: "_id",
                    as: "books",
                },
            },
            {
                $unwind: "$books",
            },
            // {
            //     $lookup: {
            //         from: "statusmasters",
            //         localField: "book_status_id",
            //         foreignField: "_id",
            //         as: "statusMasters",
            //     },
            // },
            // {
            //     $unwind: "$statusMasters",
            // },
            {
                $project: {
                    _id: 1,
                    user_book_id: 1,
                    user_id: 1,
                    book_status_id: 1,
                    book_status_name: 1,
                    "books.book_name": 1,
                    // "statusMasters.status": 1,
                    "user_name": req.session.currentUser.name,
                    is_active: 1,
                    returndate: 1,
                    issuedate: 1
                },
            },
        ])
        .then((Resp) => {
            res.render("userBookes/showuserbooks", {
                userBooksdata: Resp,
                error: req.session.error,
                success: req.session.success,
                session: req.session,
            });
        })
        .catch((empErr) => {
            req.session.error = imports.constants.messages.SystemError;
            res.redirect("back");
        });
};
exports.addUserbook = async function (req, res, next) {
    let Bookslist = await imports.Books.find({ is_active: 1, is_selected : 1 })
    let masterStatus = await imports.Masterstatus.find({ is_active: 1, status: 'Issue' })
    res.render("userBookes/adduserbook", {
        Booksdata: Bookslist,
        masterStatus: masterStatus,
        error: req.session.error,
        success: req.session.success,
        session: req.session,
    });
}
exports.insertUserBook = async function (req, res, next) {
    let reqdata = req.body
    let checkissuebooks = await imports.Userbooks.find({ book_status_name: 'Issue', user_id:ObjectId(req.session.currentUser._id) , is_active: 1 })
    if (checkissuebooks && checkissuebooks.length >= 2) {
        req.session.error = imports.constants.messages.userallredy2issues;
        res.redirect("back");
    } else {
        let insert_obj = {
            book_status_name: 'Issue',
            user_book_id: reqdata.book_id,
            user_id: req.session.currentUser._id,
            is_active: 1,
            issuedate: imports.moment(),
            returndate: imports.moment(imports.moment()).add(1, 'M')
        }
        imports.Userbooks.updateOne({ user_book_id: reqdata.book_id, is_active: 1 }, insert_obj, { upsert: true })
            .then(async(Resp) => {
                let updateBook = await imports.Books.updateOne({ _id: ObjectId(reqdata.book_id)}, {is_selected : 0})
                req.session.success = imports.constants.messages.userbookissued;
                res.redirect('/userbooks')
            })
            .catch((usererr) => {
                req.session.error = imports.constants.messages.SystemError;
                res.redirect("back");
            });
    }
}
exports.deleteuserBooksdata = async function (req, res, next) {
    imports.Userbooks
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
exports.edituserBooksdata = async function (req, res, next) {
    imports.Userbooks
        .findOne({
            _id: req.params.id,
        })
        .then(async (Userdata) => {
            Userdata = JSON.parse(JSON.stringify(Userdata))
            let Bookslist = await imports.Books.findOne({ is_active: 1 ,_id : Userdata.user_book_id})
            let masterStatus = await imports.Masterstatus.find({ is_active: 1,status: {$ne : 'Issue'}})      
            res.render("userBookes/edituserbook", {
                Userdata: Userdata,
                Bookslist: Bookslist,
                masterStatus: masterStatus,
                error: req.session.error,
                success: req.session.success,
                session: req.session,
            });
        }).catch((usererr) => {
            req.session.error = imports.constants.messages.SystemError;
            res.redirect("back");
        });
}
exports.updateUserbook = async function (req, res, next) {
    let reqdata = req.body
    imports.Userbooks
    .findOne({
      _id: { $eq: req.body.id },
    })
    .then((userbookfound) => {
        let updateresp = {}
        if(reqdata.status == 'Reissue'){
            updateresp.returndate = imports.moment(imports.moment()).add(1, 'M')
            updateresp.book_status_name = reqdata.status
            updateresp.is_active = 1
        }else if(reqdata.status == 'Return'){
            updateresp.book_status_name = reqdata.status
            updateresp.is_active = 0
        }else{
            updateresp.book_status_name = reqdata.status
            updateresp.is_active = 1
        }
        imports.Userbooks.updateOne({ _id: req.body.id }, updateresp)
            .then(async(Resp) => {
                if(reqdata.status == 'Return'){
                    let updateBook = await imports.Books.updateOne({ _id: userbookfound.user_book_id}, {is_selected : 1})
                }
                req.session.success = imports.constants.messages.updatesucess;
                res.redirect('/userbooks')
            })
            .catch((usererr) => {
                req.session.error = imports.constants.messages.SystemError;
                res.redirect("back");
            });
    })
    .catch((err) => {
        req.session.error = imports.constants.messages.SystemError;
        res.redirect("back");
    });
    
}


