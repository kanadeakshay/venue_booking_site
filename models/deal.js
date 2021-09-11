const mongoose = require('mongoose');

const dealSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    venue: {
        venueId: { type: mongoose.Schema.Types.ObjectId, ref: 'Venue' },
        ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        name: String
    },
    date: {
        type: Date
    },
    bill: {
        type: Number,
        required: true
    },
    date_added: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = mongoose.model('Deal', dealSchema);