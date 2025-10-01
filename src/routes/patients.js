const express = require('express');
const router = express.Router();
const controller = require('../controllers/patientsController');
const auth = require('../middleware/auth');

router.post('/', auth, controller.createPatient);
router.get('/', controller.listPatients);

module.exports = router;
