import { useEffect } from "react";
import { useBooks } from "./hooks/useBooks";
import { BookForm } from "./components/BookForm";

export default function App() {
  //

  const {
    books,
    loading,
    fetchBooks,
    getBookbyId,
    editBook,
    addBook,
    removeBook,
  } = useBooks();

  useEffect(() => {
    //
    const fetchData = async () => {
      await fetchBooks();
    };
    fetchData();
  }, []);

  const handleSubmit = async (data) => {
    console.log("FROM APP", data);
    await addBook(data);
  };

  return (
    <div>
      <h3>Book Form</h3>
      <BookForm onSubmit={handleSubmit} />
      <ul>
        {console.log(books.data)}
        {books.data?.map((book) => (
          <li key={book._id}>
            <p>title: {book.title}</p>
            <p>rating: {book.averageRating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
