import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

export default function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const saveBook = async () => {
    if (!title || !author || !price) {
      alert("All fields required");
      return;
    }

    try {
      await axios.post("/api/books", {
        title,
        author,
        price: Number(price),
      });

      alert("✅ Book added successfully");
      navigate("/books");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to add book");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Add Book</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      /><br /><br />

      <input
        placeholder="Author"
        value={author}
        onChange={e => setAuthor(e.target.value)}
      /><br /><br />

      <input
        placeholder="Price"
        type="number"
        value={price}
        onChange={e => setPrice(e.target.value)}
      /><br /><br />

      <button onClick={saveBook}>Save</button>
    </div>
  );
}
