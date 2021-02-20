const express = require('express');
const router = express.Router();

router.get('/ContactUs', (req, res, next) => {
    res.render('ContactUs')
})
module.exports = router;