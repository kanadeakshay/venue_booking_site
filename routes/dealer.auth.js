const express = require('express');
const { requireSignIn, dealerMiddleware } = require('../common_middlewares');
const { signup, signin, DealerProfile } = require('../controllers/dealer.auth');
const router = express.Router();

router.post('/dealer/signup', signup);
router.get('/dealer/signin', signin);
router.get('/dealer/:userId', requireSignIn, dealerMiddleware, DealerProfile);

module.exports = router;