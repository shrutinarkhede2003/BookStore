import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./dashboard.css";

export default function UserDashboard() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar title="📚 Bookstore User" />

      <div className="dashboard-container">
        <h1>User Dashboard</h1>
        <p className="subtitle">
          Welcome! Browse and explore available books
        </p>

        <div className="card-container">
          <div
            className="dashboard-card"
            onClick={() => navigate("/books")}
          >
            <h3>📖 Browse Books</h3>
            <p>View all available books</p>
          </div>
        </div>
      </div>
    </>
  );
}
