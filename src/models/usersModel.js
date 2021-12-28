const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * User schema
 */

const usersSchema = new Schema({
    name : { type: String },
    email : { type: String},
    phone_number : { type: String},   
    password : { type: String },
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

usersSchema.method({});
/**
 * Statics
 */

usersSchema.static({});

/**
 * Register
 */

module.exports = mongoose.model('users', usersSchema);
