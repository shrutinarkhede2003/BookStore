import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import "./books.css";

export default function Books() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  useEffect(() => {
    axios.get("/api/books")
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="books-page">
      <button className="back-btn" onClick={() => navigate(role === "ADMIN" ? "/admin" : "/user")}>
        ← Back
      </button>

      <h2 className="books-title">📚 Books List</h2>

      <div className="books-grid">
        {books.map(book => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p><b>Author:</b> {book.author}</p>
            <p><b>Price:</b> ₹{book.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
