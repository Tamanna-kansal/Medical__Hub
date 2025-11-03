const express = require('express');
const router = express.Router();
const db = require('../db'); 
const { v4: uuidv4 } = require('uuid'); 

router.post('/', async (req, res) => {
  const { cartUuid, items, user_id } = req.body;

  if (!cartUuid || !Array.isArray(items) || !user_id) {
    return res.status(400).json({ error: 'Missing cartUuid, items, or user_id' });
  }

  try {
    const [cartRows] = await db.execute('SELECT id FROM carts WHERE cart_uuid = ?', [cartUuid]);

    let cartId;
    if (cartRows.length === 0) {
      const [result] = await db.execute(
        'INSERT INTO carts (cart_uuid, user_id) VALUES (?, ?)',
        [cartUuid, user_id]
      );
      cartId = result.insertId;
    } else {
      cartId = cartRows[0].id;
      await db.execute('DELETE FROM cart_items WHERE cart_id = ?', [cartId]);
    }

    for (const item of items) {
      if (!item.name || typeof item.price !== 'number') {
        return res.status(400).json({ error: 'Each item must have a name and a numeric price' });
      }
    }

    const insertPromises = items.map(item => {
      return db.execute(
        'INSERT INTO cart_items (cart_id, product_id, name, price, quantity, image_url) VALUES (?, ?, ?, ?, ?, ?)',
        [
          cartId,
          item.id || null,
          item.name,
          item.price,
          item.quantity || 1,
          item.image_url || null,
        ]
      );
    });

    await Promise.all(insertPromises);

    res.json({ message: 'Cart saved successfully' });
  } catch (err) {
    console.error('Error saving cart:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/:cartUuid', async (req, res) => {
  const { cartUuid } = req.params;

  try {
    const [cartRows] = await db.execute('SELECT id FROM carts WHERE cart_uuid = ?', [cartUuid]);
    if (cartRows.length === 0) {
      return res.json({ items: [] }); 
    }

    const cartId = cartRows[0].id;

    const [items] = await db.execute(
      'SELECT product_id AS id, name, price, quantity, image_url FROM cart_items WHERE cart_id = ?',
      [cartId]
    );

    res.json({ items });
  } catch (err) {
    console.error('Error fetching cart:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
