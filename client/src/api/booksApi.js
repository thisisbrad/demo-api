import axios from "axios";

const apiUrl = import.meta.env.VITE_API_LAYER;
console.log(import.meta.env);
console.log(">>>>>", apiUrl);

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getBooks = () => api.get("/books");
export const createBook = (book) => api.post("/books", book);
export const getBookbyId = (id) => api.get(`/books/${id}`);
export const updateBook = (id, book) => api.put(`/books/${id}`, book);
export const deleteBook = (id) => api.delete(`/books/${id}`);
