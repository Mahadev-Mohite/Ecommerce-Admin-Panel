const express = require('express');
const router = express.Router();

router.use('/category', require('./category'));
router.use('/subcategory', require('./subcategory'));
router.use('/products', require('./product'));
router.use('/auth', require('./auth'));


module.exports = router;