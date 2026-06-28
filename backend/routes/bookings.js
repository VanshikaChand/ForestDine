const express = require("express");
const router = express.Router();
const { bookings, stays } = require("../data");

// GET /api/bookings — list all bookings
router.get("/", (req, res) => {
  res.status(200).json({ success: true, count: bookings.length, data: bookings });
});

// POST /api/bookings — create a booking
router.post("/", (req, res) => {
  const { stayId, guestName, checkIn, checkOut } = req.body;
  if (!stayId || !guestName || !checkIn || !checkOut) {
    return res.status(400).json({
      success: false,
      message: "Fields 'stayId', 'guestName', 'checkIn', and 'checkOut' are required.",
    });
  }
  const stay = stays.find((s) => s.id === stayId);
  if (!stay) {
    return res.status(404).json({ success: false, message: `Stay with id '${stayId}' not found.` });
  }
  const newBooking = {
    id: "b" + Date.now(),
    stayId,
    guestName,
    checkIn,
    checkOut,
    status: "pending",
    createdAt: new Date().toISOString(),
  };
  bookings.push(newBooking);
  res.status(201).json({ success: true, data: newBooking });
});

// PATCH /api/bookings/:id/status — update booking status
router.patch("/:id/status", (req, res) => {
  const { status } = req.body;
  const allowed = ["pending", "confirmed", "cancelled"];
  if (!status || !allowed.includes(status)) {
    return res.status(400).json({
      success: false,
      message: `Status must be one of: ${allowed.join(", ")}.`,
    });
  }
  const index = bookings.findIndex((b) => b.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: `Booking '${req.params.id}' not found.` });
  }
  bookings[index].status = status;
  res.status(200).json({ success: true, data: bookings[index] });
});

module.exports = router;
