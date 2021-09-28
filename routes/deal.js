const express = require('express');
const { getDeal, confirmDealsOfUser, confirmDealsOfDealer, checkout, confirmDeal, deleteUnconfirmDeal } = require('../controllers/deal');
const { requireSignIn, clientMiddleware, dealerMiddleware } = require('../common_middlewares/index')
const router = express.Router();

router.post('/checkout', requireSignIn, checkout);
router.patch('/confirm-deal/:dealId', requireSignIn, confirmDeal);
router.delete('/delete-unconfirmDeal/:dealId', requireSignIn, deleteUnconfirmDeal);
router.get('/confirm-deals/:userId', requireSignIn, clientMiddleware, confirmDealsOfUser);
router.get('/confirm-deals-dealer/:dealerId', requireSignIn, dealerMiddleware, confirmDealsOfDealer);
router.get('/deal/:dealId', requireSignIn, getDeal);

module.exports = router;