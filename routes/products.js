const express = require('express');
const router = express.Router();



router.get('/products', (req, res, next) => {


    res.render('products');

})
module.exports = router;