const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * User schema
 */

const usersbooksSchema = new Schema({
    user_book_id: { type: Schema.Types.ObjectId },
    user_id : { type: Schema.Types.ObjectId },
    book_status_id : { type: Schema.Types.ObjectId },   
    book_status_name: { type: String}, 
    issuedate : {type : Date},
    returndate : {type : Date},
    is_active:  {type: Number},
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    versionKey: false
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

usersbooksSchema.method({});
/**
 * Statics
 */

usersbooksSchema.static({});

/**
 * Register
 */

module.exports = mongoose.model('users_books', usersbooksSchema);
