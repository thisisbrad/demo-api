import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getBooks = () => api.get("/books");
export const createBook = (book) => api.post("/books", book);
export const getBookbyId = (id) => api.get(`/books/${id}`);
export const updateBook = (id, book) => api.put(`/books/${id}`, book);
export const deleteBook = (id) => api.delete(`/books/${id}`);
