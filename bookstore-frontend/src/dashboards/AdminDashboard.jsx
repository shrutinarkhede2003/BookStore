import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./dashboard.css";

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar title="📚 Bookstore Admin" />
      <div className="dashboard-container">
        <h1>Admin Dashboard</h1>
        <p className="subtitle">Manage your bookstore</p>

        <div className="card-container">
          <div className="dashboard-card" onClick={() => navigate("/books")}>
            <h3>📖 View Books</h3>
            <p>See all books</p>
          </div>

          <div className="dashboard-card" onClick={() => navigate("/add-book")}>
            <h3>➕ Add Book</h3>
            <p>Add new book</p>
          </div>
        </div>
      </div>
    </>
  );
}
