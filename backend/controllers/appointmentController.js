const Appointment = require("../models/AppointmentSchema");

exports.bookAppointment = async (req, res) => {
    try {
        const appointment = new Appointment(req.body);
        await appointment.save();

        res.status(201).json({
            message: "Appointment booked successfully",
            appointment
        });
    } catch (error) {
        console.error("Error saving appointment:", error);
        res.status(500).json({ message: "Failed to save appointment" });
    }
};
