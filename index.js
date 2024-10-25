// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const reservationRoutes = require('./routes/reservations');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;

app.use('/api/reservations', reservationRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
