const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
    venueName: {
        type: String,
        required: true,
        trim: true,
        min: 2, max: 50
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
        trim: true,
        max: 70
    },
    location: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
    },
    venuePictures: [
        { img: { type: String } }
    ],
    reviews: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            review: String
        }
    ],
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    ownerInfo: {
        ownerName: String,
        contactNumber: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Venue', venueSchema);