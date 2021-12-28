const mongoose = require('mongoose');
require('dotenv').config();

// const url = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOSTNAME}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}?authSource=admin`;
const url = `mongodb://${process.env.MONGO_HOSTNAME}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;

mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
    if (err) {
      console.log("Error While Connecting The DB",err);
      process.exit();
    }
    else {
      console.log(mongoose.connection.readyState,'MongoDB Connection Successfully');
    }
})
module.exports = {mongoose}