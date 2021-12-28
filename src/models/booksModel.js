const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * User schema
 */

const booksSchema = new Schema({
    book_name : { type: String},
    is_active:  {type: Number},
    stock : {type: Number},
    is_selected: {type: Number},
    user_id:  { type: Schema.Types.ObjectId },
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

booksSchema.method({});
/**
 * Statics
 */

booksSchema.static({});

/**
 * Register
 */

module.exports = mongoose.model('books', booksSchema);
