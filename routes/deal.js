const express = require('express');
const { getDeal, confirmDealsOfUser, confirmDealsOfDealer } = require('../controllers/deal');
const router = express.Router();

router.post('/checkout/:userId', () => { });
router.get('/confirm-deals/:userId', confirmDealsOfUser);
router.get('/confirm-deals/:dealerId', confirmDealsOfDealer);
router.get('/deal/:dealId', getDeal)

module.exports = router;