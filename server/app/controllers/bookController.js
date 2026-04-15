const Book = require("../models/Books");

const createBook = async (req, res) => {
  const book = req.body;
  console.log("book", book);
  const newBook = await Book.create(book);
  res.status(200).json({ message: "This is the book routes", data: newBook });
};

const getAllBooks = async (req, res) => {
  const books = await Book.find({});
  res.status(200).json({ message: "This is the book routes", data: books });
};
const getBookbyID = async (req, res) => {
  const id = req.params.id;
  const book = await Book.findById(id);
  console.log(">>>", id);
  // get an object out of an array bu object id?
  if (id === null) {
    res.status(404).json({ message: "Book not found" });
  }
  res.status(200).json({ message: "This is the book routes", data: book });
};

const updateBook = (req, res) => {
  const id = req.params.id;
  console.log(">>>", id);
  res.status(200).json({ message: "This is the book routes", id: id });
};

const deleteBook = (req, res) => {
  const id = req.params.id;
  console.log(">>>", id);
  res.status(200).json({ message: "This is the book routes", id: id });
};

module.exports = {
  createBook,
  getAllBooks,
  getBookbyID,
  updateBook,
  deleteBook,
};
