const express = require("express");
const router = express.Router();
const bookRoutes = require("./bookRoutes");

// localhost:3000/api/v1
router.get("/", (req, res) => {
  res.status(404).json({ message: "This should be a new message" });
});

// localhost:3000/api/v1/books
router.use("/books", bookRoutes);

module.exports = router;

// Create - POST;
// Read - GET;
// Update - PUT;
// Delete - DELETE;
