// const mongoose = require('mongoose');

// const doctorSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     specialization: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     phone: { type: String },
//     is_approved: { type: String, enum: ['approved', 'pending', 'rejected'], default: 'pending' },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model('Doctor', doctorSchema);



const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },

    // Newly added fields
    about: { type: String, default: "" },
    bio: { type: String, default: "" },

    photo: { type: String, default: "" },   // doctor image

    ticket_price: { type: Number, default: 0 },
    average_rating: { type: Number, default: 0 },
    total_rating: { type: Number, default: 0 },

    education: [
      {
        degree: String,
        institution: String,
        start: Date,
        end: Date,
      }
    ],

    experience: [
      {
        role: String,
        hospital: String,
        start: Date,
        end: Date,
      }
    ],

    is_approved: {
      type: String,
      enum: ["approved", "pending", "rejected"],
      default: "pending"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Doctor", doctorSchema);
