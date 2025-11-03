// const express = require('express');
// const router = express.Router();
// const Doctor = require('../models/DoctorSchema'); // ✅ Correct import

// // 🔹 Get all approved doctors (optionally filter by specialization)
// router.get('/', async (req, res) => {
//   const { specialization } = req.query;

//   try {
//     const filter = { is_approved: "approved" };
//     if (specialization) filter.specialization = specialization;

//     const doctors = await Doctor.find(filter).select('name specialization bio about average_rating photo');
//     res.json(doctors);
//   } catch (error) {
//     console.error('Error fetching doctors:', error);
//     res.status(500).json({ error: 'Failed to fetch doctors' });
//   }
// });

// // 🔹 Get doctor by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const doctor = await Doctor.findOne({ _id: req.params.id, is_approved: "approved" });

//     if (!doctor) {
//       return res.status(404).json({ message: 'Doctor not found' });
//     }

//     res.json(doctor);
//   } catch (error) {
//     console.error('Error fetching doctor by ID:', error);
//     res.status(500).json({ error: 'Failed to fetch doctor' });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Doctor = require('../models/DoctorSchema');

// ✅ Get all approved doctors (with optional specialization filter)
router.get('/', async (req, res) => {
  const { specialization } = req.query;

  try {
    const filter = { is_approved: "approved" };

    // ✅ Case-insensitive specialization filter
    if (specialization) {
      filter.specialization = { $regex: new RegExp(`^${specialization}$`, 'i') };
    }

    const doctors = await Doctor.find(filter).select(
      'name specialization bio about average_rating photo ticket_price phone review_count'
    );

    // ✅ Always return array, never object
    if (doctors.length === 0) {
      return res.status(200).json([]);
    }

    res.json(doctors);
  } catch (error) {
    console.error("Error fetching doctors:", error);
    res.status(500).json({ error: "Failed to fetch doctors" });
  }
});

// ✅ Get single doctor by ID
router.get('/:id', async (req, res) => {
  try {
    const doctor = await Doctor.findOne({
      _id: req.params.id,
      is_approved: "approved"
    });

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    res.json(doctor);
  } catch (error) {
    console.error("Error fetching doctor by ID:", error);
    res.status(500).json({ error: "Failed to fetch doctor" });
  }
});

module.exports = router;
