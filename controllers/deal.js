const stripe = require('stripe')(process.env.stripe_key);
const Deal = require('../models/deal');

const checkout = async (req, res) => {
    const { venueId, eventDate, bill, venueName, venueOwnerId } = req.body;

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            success_url: `${process.env.global_client_url}/payment-status?success=true`,
            cancel_url: `${process.env.global_client_url}/payment-status?canceled=true`,
            line_items: [
                {
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            name: venueName
                        },
                        unit_amount: bill * 100
                    },
                    quantity: 1
                }
            ]
        })
        if (session) {
            const deal = new Deal({
                venueId, eventDate, venueName, venueOwnerId,
                bill: bill,
                userId: req.user.id
            });
            deal.save((error, _deal) => {
                if (error) return res.status(400).json({ msg: "Something went wrong", error });
                if (_deal) return res.status(201).json({ url: session.url, dealId: _deal._id })
            })
        } else {
            res.status(400).json({ msg: `session not created` })
        }
    } catch (e) {
        return res.status(400).json({ msg: e })
    }
}

const confirmDeal = async (req, res) => {
    const { dealId } = req.params;
    const deal = await Deal.findOneAndUpdate({ _id: dealId }, {
        status: "green"
    });
    res.status(200).json({ deal });
}

const deleteUnconfirmDeal = (req, res) => {
    const { dealId } = req.params;
    Deal.findByIdAndDelete({ _id: dealId })
        .exec((error, deal) => {
            if (!deal) return res.status(200).json({ msg: 'Deal got deleted' });
            if (error) return res.status(400).json({ msg: 'Something went wrong', error });
        })
}

const confirmDealsOfUser = (req, res) => {
    const { userId } = req.params;
    Deal.find({ userId: userId, status: "green" })
        .exec((error, _allDeals) => {
            if (error) return res.status(400).json({ msg: `Something went wrong`, error });
            if (_allDeals) return res.status(200).json({ _allDeals });
        })
}
const confirmDealsOfDealer = (req, res) => {
    const { dealerId } = req.params;
    Deal.find({ venueOwnerId: dealerId, status: "green" })
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
    getDeal,
    confirmDeal,
    deleteUnconfirmDeal
}