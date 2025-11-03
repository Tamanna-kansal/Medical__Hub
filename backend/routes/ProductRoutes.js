const express = require('express');
const router = express.Router();
const Product = require('../models/ProductSchema');

// ✅ GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all from MongoDB
    res.json(products);
  } catch (error) {
    console.error('DB query error:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
