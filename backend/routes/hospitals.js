const express = require('express');
const router = express.Router();
const Hospital = require('../models/HospitalSchema');

// ✅ GET hospitals by city
router.get('/', async (req, res) => {
  const city = req.query.city;

  if (!city) {
    return res.status(400).json({ error: 'City query param is required' });
  }

  try {
    // Find hospitals where city matches (case-insensitive)
    const hospitals = await Hospital.find({
      city: { $regex: new RegExp(`^${city}$`, 'i') } // case-insensitive match
    });

    if (hospitals.length === 0) {
      return res.status(404).json({ message: 'No hospitals found for this city' });
    }

    res.json(hospitals);
  } catch (error) {
    console.error('Error fetching hospitals:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
