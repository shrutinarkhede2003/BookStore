import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import AdminDashboard from "./dashboards/AdminDashboard";
import UserDashboard from "./dashboards/UserDashboard";
import PrivateRoute from "./routes/PrivateRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/admin" element={
        <PrivateRoute role="ADMIN"><AdminDashboard /></PrivateRoute>
      } />

      <Route path="/user" element={
        <PrivateRoute><UserDashboard /></PrivateRoute>
      } />

      <Route path="/books" element={
        <PrivateRoute><Books /></PrivateRoute>
      } />

      <Route path="/add-book" element={
        <PrivateRoute role="ADMIN"><AddBook /></PrivateRoute>
      } />
    </Routes>
  );
}
