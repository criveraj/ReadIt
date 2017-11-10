const express = require('express');

const router = new express.Router();

// Status 200 = request was fulfilled
router.get('/dashboard', (req, res) => {
    res.status(200).json({
        message: "You're authorized to see this."
    });
});

module.exports = router;