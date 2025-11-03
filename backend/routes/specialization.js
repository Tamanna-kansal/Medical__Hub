// // backend/routes/specialization.js
// const express = require("express");
// const router = express.Router();
// const Doctor = require("../models/DoctorSchema");

// // ✅ Get all distinct specializations of approved doctors
// router.get("/", async (req, res) => {
//   try {
//     const specializations = await Doctor.distinct("specialization", { is_approved: "approved" });
//     res.json(specializations);
//   } catch (error) {
//     console.error("Error fetching specializations:", error);
//     res.status(500).json({ error: "Failed to fetch specializations" });
//   }
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const Doctor = require("../models/DoctorSchema");

// ✅ Get distinct specializations of approved doctors
router.get("/", async (req, res) => {
  try {
    console.log("📡 Fetching specializations...");
    const specializations = await Doctor.distinct("specialization", { is_approved: "approved" });
    console.log("✅ Found specializations:", specializations);
    res.json(specializations);
  } catch (error) {
    console.error("❌ Error fetching specializations:", error);
    res.status(500).json({ error: "Failed to fetch specializations" });
  }
});

module.exports = router;
