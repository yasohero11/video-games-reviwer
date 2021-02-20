const express = require('express');
const router = express.Router();

router.get('/Features', (req, res, next) => {
    res.render('Features')
})
module.exports = router;