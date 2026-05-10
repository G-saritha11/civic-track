import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/login";
import Register from "./components/register";
import AdminDashboard from "./components/adminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Authentication Pages */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Dashboard */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Temporary Pages for Sidebar Navigation */}
        <Route
          path="/complaints"
          element={<h1 style={{ padding: "20px" }}>All Complaints Page</h1>}
        />

        <Route
          path="/users"
          element={<h1 style={{ padding: "20px" }}>Users Page</h1>}
        />

        <Route
          path="/reports"
          element={<h1 style={{ padding: "20px" }}>Reports Page</h1>}
        />

        <Route
          path="/settings"
          element={<h1 style={{ padding: "20px" }}>Settings Page</h1>}
        />

        <Route
          path="/notifications"
          element={
            <h1 style={{ padding: "20px" }}>Notifications Page</h1>
          }
        />

        <Route
          path="/support"
          element={<h1 style={{ padding: "20px" }}>Support Page</h1>}
        />
      </Routes>
    </Router>
  );
}

export default App;