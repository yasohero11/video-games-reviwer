const express = require('express');
const router = express.Router();

router.use(function(req, res, next) {
    return res.status(404).render('404error');
});
module.exports = router;