
// const express = require("express");
// const router = express.Router();
// const Appointment = require("../models/AppointmentSchema");
// const Doctor = require("../models/DoctorSchema");
// const appointments = require("./routes/appointments");

// // Test route
// // Test route
// router.get("/test", (req, res) => {
//   res.json({ message: "Appointments route works ✅" });
// });


// router.get("/", (req, res) => {
//   res.json({ message: "Appointments API is active ✅" });
// });
// // POST /api/appointments
// router.post("/", async (req, res) => {
//   try {
//     const {
//       username,
//       email,
//       phoneNumber,
//       gender,
//       age,
//       doctorId,
//       specialization,
//       appointmentTime,
//       patientId,
//     } = req.body;

//     // Validate fields
//     if (!username || !email || !phoneNumber || !gender || !age || !doctorId || !specialization || !appointmentTime) {
//       return res.status(400).json({ message: "Please fill all fields" });
//     }

//     // ✅ Convert doctorId to ObjectId if string
//     let validDoctorId;
//     try {
//       validDoctorId = new mongoose.Types.ObjectId(doctorId);
//     } catch {
//       return res.status(400).json({ message: "Invalid doctor ID format" });
//     }

//     // ✅ Find doctor (approved only)
//     const doctor = await Doctor.findOne({ _id: validDoctorId, is_approved: "approved" });

//     if (!doctor) {
//       return res.status(404).json({ message: "Doctor not found or not approved" });
//     }

//     const newAppointment = new Appointment({
//       username,
//       email,
//       phoneNumber,
//       gender,
//       age,
//       doctorName: doctor.name, // force correct name from DB
//       doctorId: validDoctorId,
//       specialization,
//       appointmentTime,
//       patientId: patientId || null,
//       status: "pending",
//     });

//     await newAppointment.save();

//     return res.status(201).json({ message: "Appointment booked successfully ✅" });

//   } catch (error) {
//     console.error("❌ Error booking appointment:", error);
//     return res.status(500).json({ message: "Failed to book appointment" });
//   }
// });



// const express = require("express");
// const router = express.Router();

// const Appointment = require("../models/AppointmentSchema");
// const Doctor = require("../models/DoctorSchema");

// // ✅ Create Appointment
// router.post("/", async (req, res) => {
//   try {
//     const {
//       username,
//       email,
//       phoneNumber,
//       gender,
//       age,
//       doctorName,
//       doctorId,
//       specialization,
//       appointmentTime,
//       patientId
//     } = req.body;

//     // ✅ Check doctor exists
//     const doctor = await Doctor.findById(doctorId);
//     if (!doctor) {
//       console.log("❌ Doctor not found for ID:", doctorId);
//       return res.status(404).json({ message: "Doctor not found" });
//     }

//     // ✅ Create Appointment entry
//     const appointment = new Appointment({
//       username,
//       email,
//       phoneNumber,
//       gender,
//       age,
//       doctorName,
//       doctorId,
//       specialization,
//       appointmentTime,
//       patientId,
//       status: "pending",
//     });

//     await appointment.save();

//     res.status(201).json({
//       message: "✅ Appointment booked successfully",
//       appointment,
//     });
//   } catch (error) {
//     console.error("❌ Error booking appointment:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;



const express = require("express");
const router = express.Router();
const { bookAppointment } = require("../controllers/appointmentController");

router.post("/", bookAppointment);

module.exports = router;
