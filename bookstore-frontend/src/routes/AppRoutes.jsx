import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminDashboard from "../dashboards/AdminDashboard";
import UserDashboard from "../dashboards/UserDashboard";

const PrivateRoute = ({ children, role }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");
  return token && userRole === role ? children : <Navigate to="/login" />;
};

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/admin" element={
        <PrivateRoute role="ADMIN"><AdminDashboard /></PrivateRoute>
      } />

      <Route path="/user" element={
        <PrivateRoute role="USER"><UserDashboard /></PrivateRoute>
      } />
    </Routes>
  );
}
