import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/login";
import Register from "./components/register";
import AdminDashboard from "./components/adminDashboard";
import AllComplaints from "./components/AllComplaints";
import Users from "./components/Users";
import Support from "./components/Support";
import MyComplaints from "./components/MyComplaints";
import CreateComplaint from "./components/CreateComplaint";

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
       <Route path="/allComplaints" element={<AllComplaints />} />
        <Route path="/users" element={<Users />} />

        <Route
          path="/support"
          element={<Support />}
        />
      
       <Route path="/my-complaints" element={<MyComplaints />} />

       <Route
       path="/create-complaint"
       element={<CreateComplaint />}
        />


      </Routes>

    </Router>
  );
}

export default App;