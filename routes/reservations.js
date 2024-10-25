// backend/routes/reservations.js
const express = require('express');
const Reservation = require('../models/Reservation');

const router = express.Router();

// Create a new reservation
router.post('/', async (req, res) => {
    const { customerName, reservationDate, partySize } = req.body;

    try {
        const newReservation = new Reservation({
            customerName,
            reservationDate,
            partySize,
        });
        await newReservation.save();
        res.status(201).json(newReservation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all reservations
router.get('/', async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.json(reservations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a reservation
router.delete('/:id', async (req, res) => {
    try {
        const reservation = await Reservation.findByIdAndDelete(req.params.id);
        if (!reservation) return res.status(404).json({ message: 'Reservation not found' });
        res.json({ message: 'Reservation deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
