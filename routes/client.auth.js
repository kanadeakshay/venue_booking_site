const express = require('express');
const { requireSignIn, clientMiddleware } = require('../common_middlewares');
const { signup, signin, UserProfile } = require('../controllers/client.auth');
const router = express.Router();

router.post('/signup', signup);
router.get('/signin', signin);
router.get('/user/:userId', requireSignIn, clientMiddleware, UserProfile);

module.exports = router;