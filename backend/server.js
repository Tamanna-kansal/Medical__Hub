// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./db'); // ✅ Import MongoDB connection
// const doctorsRouter = require('./routes/doctors');
// const appointmentsRouter = require('./routes/appointments');
// const specializationsRouter = require('./routes/specialization');
// const hospitalsRouter = require('./routes/hospitals');
// const productRoutes = require('./routes/ProductRoutes');
// const orderRoutes = require('./routes/OrderRoutes');
// // const checkoutRouter = require('./routes/checkout');
// const cartRoutes = require('./routes/cart');
// const authRoutes = require('./routes/auth');
// const app = express();

// // ✅ Connect to MongoDB before starting the server
// connectDB();

// app.use(cors());
// app.use(express.json());

// // ✅ Define routes
// app.use('/api/doctors', doctorsRouter);
// app.use('/api/appointments', appointmentsRouter);
// app.use('/api/specializations', specializationsRouter);
// app.use('/api/hospitals', hospitalsRouter);
// app.use('/api/products', productRoutes);
// app.use('/api/orders', orderRoutes);
// // app.use('/api/checkout', checkoutRouter);
// app.use('/api/cart', cartRoutes);

// app.use('/api/auth', authRoutes);
// const PORT = 5001;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });




const express = require('express');
const cors = require('cors');
const connectDB = require('./db'); // ✅ MongoDB connection file
require('dotenv').config();

// ✅ Import Routes
const doctorsRouter = require('./routes/doctors');
const appointmentsRouter = require('./routes/appointments');
const hospitalsRouter = require('./routes/hospitals');
const productRoutes = require('./routes/ProductRoutes');
const orderRoutes = require('./routes/OrderRoutes');
const cartRoutes = require('./routes/cart');
const authRoutes = require('./routes/auth'); // ✅ Auth routes (login/signup)
const specializationRoute = require('./routes/specialization')
const app = express();

// ✅ Connect MongoDB
connectDB();

// ✅ Middleware
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// ✅ Register routes
app.use('/api/doctors', doctorsRouter);
app.use('/api/appointments', appointmentsRouter);
app.use('/api/hospitals', hospitalsRouter);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/auth', authRoutes); // ✅ Signup & Login routes
app.use("/api/specialization", specializationRoute);
// ✅ Default route
app.get('/', (req, res) => {
  res.send('Backend API is running successfully ✅');
});


// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
