const express = require('express');
const { signup, signin } = require('../controllers/client.auth');
const router = express.Router();

router.post('/signup', signup);
router.get('/signin', signin);
// router.get('/user/:id', () => { });

module.exports = router;