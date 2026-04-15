import { useState, useEffect, useCallback } from "react";
import {
  getBooks,
  getBookbyId,
  createBook,
  updateBook,
  deleteBook,
} from "../api/booksApi";

export function useBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBooks = useCallback(async () => {
    //
    setLoading(true);
    setError(null);
    try {
      const res = await getBooks();
      setBooks(res.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  });

  const addBook = async (data) => {
    //
    setLoading(true);
    try {
      const res = await createBook(data);
      setBooks((prev) => [res.data, ...prev]);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  //update
  const editBook = async (id, data) => {
    setLoading(true);
    try {
      const res = await updateBook(id, data);
      setBooks((prev) => prev.map((p) => (p.id === id ? res.data : p)));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const removeBook = async (id) => {
    setLoading(true);
    try {
      await deleteBook(id);
      setBooks((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    books,
    loading,
    error,
    fetchBooks,
    getBookbyId,
    editBook,
    addBook,
    removeBook,
  };
}
