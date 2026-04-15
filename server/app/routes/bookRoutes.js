const express = require("express");
const router = express.Router();
const {
  createBook,
  getAllBooks,
  getBookbyID,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

// localhost:3000/api/v1/books
// Read - GET;
router.get("/", getAllBooks);

router.get("/:id", getBookbyID);

// Create - POST;
router.post("/", createBook);

// Update - PUT;
router.put("/:id", updateBook);
// Delete - DELETE;
router.delete("/:id", deleteBook);
module.exports = router;
