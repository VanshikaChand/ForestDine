const express = require("express");
const router = express.Router();
const prisma = require("../lib/prisma");

// GET /api/bookings — list all bookings
router.get("/", async (req, res, next) => {
  try {
    const bookings = await prisma.booking.findMany({ include: { stay: true } });
    res.status(200).json({ success: true, count: bookings.length, data: bookings });
  } catch (err) {
    next(err);
  }
});

// POST /api/bookings — create a booking
router.post("/", async (req, res, next) => {
  try {
    const { stayId, guestName, checkIn, checkOut } = req.body;
    if (!stayId || !guestName || !checkIn || !checkOut) {
      return res.status(400).json({
        success: false,
        message: "Fields 'stayId', 'guestName', 'checkIn', and 'checkOut' are required.",
      });
    }
    const stay = await prisma.stay.findUnique({ where: { id: Number(stayId) } });
    if (!stay) {
      return res.status(404).json({ success: false, message: `Stay with id '${stayId}' not found.` });
    }
    const newBooking = await prisma.booking.create({
      data: {
        stayId: Number(stayId),
        guestName,
        checkIn: new Date(checkIn),
        checkOut: new Date(checkOut),
        status: "pending",
      },
    });
    res.status(201).json({ success: true, data: newBooking });
  } catch (err) {
    next(err);
  }
});

// PATCH /api/bookings/:id/status — update booking status
router.patch("/:id/status", async (req, res, next) => {
  try {
    const { status } = req.body;
    const allowed = ["pending", "confirmed", "cancelled"];
    if (!status || !allowed.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Status must be one of: ${allowed.join(", ")}.`,
      });
    }
    const booking = await prisma.booking.update({
      where: { id: Number(req.params.id) },
      data: { status },
    });
    res.status(200).json({ success: true, data: booking });
  } catch (err) {
    if (err.code === "P2025") {
      return res.status(404).json({ success: false, message: `Booking '${req.params.id}' not found.` });
    }
    next(err);
  }
});

module.exports = router;
