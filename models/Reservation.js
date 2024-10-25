// backend/models/Reservation.js
const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true,
    },
    reservationDate: {
        type: Date,
        required: true,
    },
    partySize: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;
