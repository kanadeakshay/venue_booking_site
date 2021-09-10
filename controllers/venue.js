const Venue = require('../models/venue');
const slugify = require('slugify');

const createVenue = (req, res) => {
    const { venueName, address, location, category, price } = req.body;
    let venuePictures = [];

    if (req.files.length > 0) {
        venuePictures = req.files.map((file) => {
            return { img: file.filename };
        })
    }

    const venue = new Venue({
        venueName: venueName,
        slug: slugify(venueName),
        address: address,
        location: location,
        category: category,
        price: price,
        venuePictures,
        owner: req.user.id
    });
    venue.save((error, _venue) => {
        if (error) return res.status(400).json({ msg: `While saving venue omething went wrong`, error });
        if (_venue) return res.status(201).json({ _venue, files: req.files });
    })
}

const getVenueByVenueId = (req, res) => {
    const { venueId } = req.params;
    if (venueId) {
        Venue.findOne({ _id: venueId })
            .exec((error, _venue) => {
                if (error) return res.status(400).json({ msg: `Something went wrong`, error });
                if (_venue) res.status(200).json({ _venue });
            })
    } else {
        return res.status(400).json({ msg: `Venue dosen't exit` });
    }
}

const getAllVenuesByOwnerId = async (req, res) => {
    const { ownerId } = req.params;
    if (ownerId) {
        Venue.find({ owner: ownerId })
            .exec((error, _allvenues) => {
                if (error) return res.status(400).json({ msg: `Something went wrong`, error });
                if (_allvenues) res.status(200).json({ _allvenues });
            })
    }
}

const getAllVenues = async (req, res) => {
    const allVenues = await Venue.find({});
    if (allVenues) return res.status(200).json({ allVenues });
    else return res.status(400).json({ msg: `Something happend while fectching all venues` });
}


module.exports = {
    createVenue,
    getVenueByVenueId,
    getAllVenuesByOwnerId,
    getAllVenues
}