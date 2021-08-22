const express = require('express');
const { signup, signin } = require('../controllers/dealer.auth');
const router = express.Router();

router.post('/dealer/signup', signup);
router.get('/dealer/signin', signin);
// router.get('/user/:id', () => { });

module.exports = router;