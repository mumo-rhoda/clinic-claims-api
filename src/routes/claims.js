const express = require('express');
const router = express.Router();
const controller = require('../controllers/claimsController');
const auth = require('../middleware/auth');

router.post('/', auth, controller.createClaim);
router.get('/', controller.listClaims);

module.exports = router;
