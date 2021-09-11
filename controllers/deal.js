const Deal = require('../models/deal');

const checkout = (req, res) => {
    
}

const confirmDealsOfUser = (req, res) => {
    const { userId } = req.params;
    Deal.find({ userId: userId })
        .exec((error, _allDeals) => {
            if (error) return res.status(400).json({ msg: `Something went wrong`, error });
            if (_allDeals) return res.status(200).json({ _allDeals });
        })
}
const confirmDealsOfDealer = (req, res) => {
    const { dealerId } = req.params;
    const { venueId, ownerId } = Deal.venue;
    Deal.find({ ownerId: dealerId })
        .exec((error, _allDeals) => {
            if (error) return res.status(400).json({ msg: `Something went wrong`, error });
            if (_allDeals) return res.status(200).json({ _allDeals });
        })
}

const getDeal = (req, res) => {
    const dealId = req.params;
    Deal.findById({ _id: dealId })
        .exec((error, _deal) => {
            if (error) return res.status(400).json({ msg: `Something went wrong`, error });
            if (_deal) return res.status(200).json({ _deal });
        })
}

module.exports = {
    checkout,
    confirmDealsOfUser,
    confirmDealsOfDealer,
    getDeal
}