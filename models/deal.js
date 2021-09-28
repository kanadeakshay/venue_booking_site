const mongoose = require('mongoose');

const dealSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    venueId: { type: mongoose.Schema.Types.ObjectId, ref: 'Venue', required: true },
    venueName: {
        type: String,
        required: true
    },
    venueOwnerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    eventDate: {
        type: String,
        required: true
    },
    bill: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: "blue"
    },
    date_added: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = mongoose.model('Deal', dealSchema);