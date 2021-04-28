const express = require('express');
const router = express.Router();
const booking = require('./bookings');


router.use('/bookings/', booking);


router.get("*", (req, res) => {
    res.send("data not found")
})


module.exports = router;