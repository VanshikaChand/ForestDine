const express = require("express");
const router = express.Router();
const { stays } = require("../data");

// GET /api/stays — list all stays (optional ?available=true filter)
router.get("/", (req, res) => {
  const { available } = req.query;
  let result = stays;
  if (available !== undefined) {
    result = stays.filter((s) => String(s.available) === available);
  }
  res.status(200).json({ success: true, count: result.length, data: result });
});

// GET /api/stays/search?q=coorg — search by title or location
router.get("/search", (req, res) => {
  const q = (req.query.q || "").toLowerCase().trim();
  if (!q) {
    return res.status(400).json({ success: false, message: "Query param 'q' is required." });
  }
  const results = stays.filter(
    (s) =>
      s.title.toLowerCase().includes(q) ||
      s.location.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q)
  );
  res.status(200).json({ success: true, count: results.length, data: results });
});

// GET /api/stays/:id — get a single stay
router.get("/:id", (req, res) => {
  const stay = stays.find((s) => s.id === req.params.id);
  if (!stay) {
    return res.status(404).json({ success: false, message: `Stay with id '${req.params.id}' not found.` });
  }
  res.status(200).json({ success: true, data: stay });
});

// POST /api/stays — create a new stay
router.post("/", (req, res) => {
  const { title, location, description, pricePerNight } = req.body;
  if (!title || !location || !description || !pricePerNight) {
    return res.status(400).json({
      success: false,
      message: "Fields 'title', 'location', 'description', and 'pricePerNight' are required.",
    });
  }
  const newStay = {
    id: String(Date.now()),
    title,
    location,
    description,
    pricePerNight: Number(pricePerNight),
    tag: location,
    rating: 0,
    available: true,
    ...req.body,
  };
  stays.push(newStay);
  res.status(201).json({ success: true, data: newStay });
});

// PUT /api/stays/:id — update a stay
router.put("/:id", (req, res) => {
  const index = stays.findIndex((s) => s.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: `Stay with id '${req.params.id}' not found.` });
  }
  stays[index] = { ...stays[index], ...req.body, id: stays[index].id };
  res.status(200).json({ success: true, data: stays[index] });
});

// DELETE /api/stays/:id — delete a stay
router.delete("/:id", (req, res) => {
  const index = stays.findIndex((s) => s.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: `Stay with id '${req.params.id}' not found.` });
  }
  stays.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
