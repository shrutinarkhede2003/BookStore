import { useNavigate } from "react-router-dom";

export default function Navbar({ title }) {
  const navigate = useNavigate();

  return (
    <div style={{
      background: "#4f46e5",
      color: "white",
      padding: "15px 30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h3>{title}</h3>
      <button
        onClick={() => {
          localStorage.clear();
          navigate("/login");
        }}
        style={{
          background: "white",
          color: "#4f46e5",
          border: "none",
          padding: "8px 14px",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Logout
      </button>
    </div>
  );
}
