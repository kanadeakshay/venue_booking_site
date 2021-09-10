const express = require('express');
const { requireSignIn, dealerMiddleware } = require('../common_middlewares');
const { signup, signin, DealerProfile, signout } = require('../controllers/dealer.auth');
const router = express.Router();

router.post('/dealer/signup', signup);
router.post('/dealer/signin', signin);
router.post('/sign-out', signout);
router.get('/dealer/:userId', requireSignIn, dealerMiddleware, DealerProfile);

module.exports = router;