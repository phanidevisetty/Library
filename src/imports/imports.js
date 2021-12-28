// const constants = require('../constants/messages');
const constants = require('../constants/messages');
const path = require('path');
const fs = require('fs');
const utils = require('../utils/utils');
const moment = require('moment');
const ejs = require('ejs');
const mongoose = require('../../mongoConnection').mongoose
const bcrypt = require('../utils/utils').bcrypt
const Cryptr = require('cryptr');
const cryptr = new Cryptr('@library$ecretKey');
const crypto = require('crypto');
const Users = require('../models/usersModel')
const Books = require('../models/booksModel')
const Userbooks = require('../models/userBooksModel')
const Masterstatus = require('../models/masterstatusModel')


module.exports = {
    constants, path, fs,  utils,  mongoose, crypto, ejs,Users, Books, Userbooks, Masterstatus, moment
}