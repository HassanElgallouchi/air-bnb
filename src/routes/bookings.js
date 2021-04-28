const express = require('express');
const bookingController = require('../controllers/bookings');
const router = express.Router();

router.get('/', bookingController.getAll)
router.post('/', bookingController.addOne)


module.exports = router;

