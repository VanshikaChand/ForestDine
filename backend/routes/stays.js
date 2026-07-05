const express = require("express");
const router = express.Router();
const prisma = require("../lib/prisma");

// GET /api/stays — list all stays (optional ?available=true filter)
router.get("/", async (req, res, next) => {
  try {
    const { available } = req.query;
    const where = available !== undefined ? { available: available === "true" } : {};
    const result = await prisma.stay.findMany({ where });
    res.status(200).json({ success: true, count: result.length, data: result });
  } catch (err) {
    next(err);
  }
});

// GET /api/stays/search?q=coorg — search by title or location or description
router.get("/search", async (req, res, next) => {
  try {
    const q = (req.query.q || "").trim();
    if (!q) {
      return res.status(400).json({ success: false, message: "Query param 'q' is required." });
    }
    const results = await prisma.stay.findMany({
      where: {
        OR: [
          { title: { contains: q, mode: "insensitive" } },
          { location: { contains: q, mode: "insensitive" } },
          { description: { contains: q, mode: "insensitive" } },
        ],
      },
    });
    res.status(200).json({ success: true, count: results.length, data: results });
  } catch (err) {
    next(err);
  }
});

// GET /api/stays/:id — get a single stay
router.get("/:id", async (req, res, next) => {
  try {
    const stay = await prisma.stay.findUnique({ where: { id: Number(req.params.id) } });
    if (!stay) {
      return res.status(404).json({ success: false, message: `Stay with id '${req.params.id}' not found.` });
    }
    res.status(200).json({ success: true, data: stay });
  } catch (err) {
    next(err);
  }
});

// POST /api/stays — create a new stay
router.post("/", async (req, res, next) => {
  try {
    const { title, location, description, pricePerNight } = req.body;
    if (!title || !location || !description || !pricePerNight) {
      return res.status(400).json({
        success: false,
        message: "Fields 'title', 'location', 'description', and 'pricePerNight' are required.",
      });
    }
    const newStay = await prisma.stay.create({
      data: {
        title,
        location,
        description,
        pricePerNight: Number(pricePerNight),
        tag: req.body.tag || location,
        rating: req.body.rating ? Number(req.body.rating) : 0,
        available: req.body.available !== undefined ? req.body.available : true,
      },
    });
    res.status(201).json({ success: true, data: newStay });
  } catch (err) {
    next(err);
  }
});

// PUT /api/stays/:id — update a stay
router.put("/:id", async (req, res, next) => {
  try {
    const { id, ...updateData } = req.body; // never let client overwrite id
    const stay = await prisma.stay.update({
      where: { id: Number(req.params.id) },
      data: updateData,
    });
    res.status(200).json({ success: true, data: stay });
  } catch (err) {
    if (err.code === "P2025") {
      return res.status(404).json({ success: false, message: `Stay with id '${req.params.id}' not found.` });
    }
    next(err);
  }
});

// DELETE /api/stays/:id — delete a stay
router.delete("/:id", async (req, res, next) => {
  try {
    await prisma.stay.delete({ where: { id: Number(req.params.id) } });
    res.status(204).send();
  } catch (err) {
    if (err.code === "P2025") {
      return res.status(404).json({ success: false, message: `Stay with id '${req.params.id}' not found.` });
    }
    next(err);
  }
});

module.exports = router;
