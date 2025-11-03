const express = require('express');
const router = express.Router();
const Order = require('../models/OrderSchema'); // import the Mongoose model

// POST /api/orders
router.post('/', async (req, res) => {
  try {
    const { userId, items } = req.body;

    if (!userId || !items || items.length === 0) {
      return res.status(400).json({ message: 'User ID and items are required' });
    }

    // Calculate total
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Create new order document
    const newOrder = new Order({
      userId,
      items,
      total
    });

    const savedOrder = await newOrder.save();

    res.status(201).json({
      success: true,
      message: 'Order placed successfully',
      order: savedOrder
    });
  } catch (error) {
    console.error('Order creation error:', error);
    res.status(500).json({ success: false, message: 'Server error during order creation' });
  }
});

module.exports = router;
