const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    doctorName: { type: String, required: true },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
    specialization: { type: String, required: true },
    appointmentTime: { type: String, required: true },
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
    status: { type: String, default: "pending" },
});

module.exports = mongoose.model("Appointment", AppointmentSchema);


