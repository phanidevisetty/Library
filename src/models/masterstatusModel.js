const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * User schema
 */

const masterstatusSchema = new Schema({
    status : { type: String},
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

masterstatusSchema.method({});
/**
 * Statics
 */

masterstatusSchema.static({});

/**
 * Register
 */

module.exports = mongoose.model('statusmasters', masterstatusSchema);
