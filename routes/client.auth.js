const express = require('express');
const { requireSignIn, clientMiddleware } = require('../common_middlewares');
const { signup, signin, UserProfile, signout } = require('../controllers/client.auth');
const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/sign-out', signout)
router.get('/user/:userId', requireSignIn, clientMiddleware, UserProfile);

module.exports = router;