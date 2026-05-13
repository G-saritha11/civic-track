import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./adminDashboard.css";

import {
  FaHome,
  FaClipboardList,
  FaUsers,
  FaChartBar,
  FaCog,
  FaBell,
  FaSignOutAlt,
  FaHeadset,
  FaFilter,
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaExclamationCircle,
} from "react-icons/fa";

function AdminDashboard() {
  const navigate = useNavigate();

  // =========================
  // Navigation
  // =========================
  const handleDashboard = () => navigate("/admin");
  const handleComplaints = () => navigate("/complaints");
  const handleUsers = () => navigate("/users");
  const handleReports = () => navigate("/reports");
  const handleSettings = () => navigate("/settings");
  const handleNotifications = () => navigate("/notifications");
  const handleSupport = () => navigate("/support");
  const handleLogout = () => navigate("/");

  // =========================
  // Complaints Data
  // =========================
  const [complaints, setComplaints] = useState([
    {
      id: 1,
      title: "Pothole on MG Road",
      user: "Rahul Kumar",
      category: "Roads",
      location: "MG Road, Bengaluru",
      status: "In Progress",
      date: "20 May 2024",
      image: "https://via.placeholder.com/60",
    },
    {
      id: 2,
      title: "Garbage Overflowing",
      user: "Sneha Reddy",
      category: "Sanitation",
      location: "HSR Layout",
      status: "Pending",
      date: "18 May 2024",
      image: "https://via.placeholder.com/60",
    },
    {
      id: 3,
      title: "Water Leakage",
      user: "Arun Prakash",
      category: "Water",
      location: "Koramangala",
      status: "Resolved",
      date: "15 May 2024",
      image: "https://via.placeholder.com/60",
    },
  ]);

  // =========================
  // REAL FILTER STATES
  // =========================
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [searchTerm, setSearchTerm] = useState("");

  // =========================
  // TEMP FILTER STATES
  // =========================
  const [tempStatus, setTempStatus] = useState("All Status");
  const [tempCategory, setTempCategory] = useState("All Categories");
  const [tempSearch, setTempSearch] = useState("");

  // =========================
  // APPLY FILTER BUTTON
  // =========================
  const handleFilter = () => {
    setStatusFilter(tempStatus);
    setCategoryFilter(tempCategory);
    setSearchTerm(tempSearch);
  };

  // =========================
  // Update Status
  // =========================
  const handleUpdate = (id) => {
    const updated = complaints.map((item) => {
      if (item.id === id) {
        if (item.status === "Pending") return { ...item, status: "In Progress" };
        if (item.status === "In Progress") return { ...item, status: "Resolved" };
      }
      return item;
    });

    setComplaints(updated);
  };

  // =========================
  // FILTER LOGIC
  // =========================
  const filteredComplaints = complaints.filter((item) => {
    const statusMatch =
      statusFilter === "All Status" || item.status === statusFilter;

    const categoryMatch =
      categoryFilter === "All Categories" ||
      item.category === categoryFilter;

    const searchMatch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase());

    return statusMatch && categoryMatch && searchMatch;
  });

  // =========================
  // COUNTS
  // =========================
  const total = complaints.length;
  const pending = complaints.filter((i) => i.status === "Pending").length;
  const progress = complaints.filter((i) => i.status === "In Progress").length;
  const resolved = complaints.filter((i) => i.status === "Resolved").length;

  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <div className="sidebar">
        <div>
          <div className="logo-section">
            <FaCheckCircle size={35} color="#3b82f6" />
            <h2>CivicTrack</h2>
          </div>

          <div className="menu">
            <div className="menu-item active" onClick={handleDashboard}>
              <FaHome /> Dashboard
            </div>

            <div className="menu-item" onClick={handleComplaints}>
              <FaClipboardList /> All Complaints
            </div>

            <div className="menu-item" onClick={handleUsers}>
              <FaUsers /> Users
            </div>

            <div className="menu-item" onClick={handleReports}>
              <FaChartBar /> Reports
            </div>

            <div className="menu-item" onClick={handleSettings}>
              <FaCog /> Settings
            </div>

            <div className="menu-item" onClick={handleNotifications}>
              <FaBell /> Notifications
            </div>

            <div className="menu-item" onClick={handleLogout}>
              <FaSignOutAlt /> Logout
            </div>
          </div>
        </div>

        <div className="help-box">
          <FaHeadset size={40} />
          <h3>Need Help?</h3>
          <button onClick={handleSupport}>Contact Support</button>
        </div>
      </div>

      {/* MAIN */}
      <div className="main">

        {/* TOPBAR */}
        <div className="topbar">
  <h1>Admin Dashboard</h1>

  <div className="topbar-right">
    <div className="notification-wrapper">
  <FaBell
    className="top-icon"
    onClick={handleNotifications}
  />

  <span className="notification-count">
    3
  </span>
</div>
    <div className="admin-profile">
      <div className="admin-avatar">A</div>
      <div>
        <h4>Admin</h4>
        <p>Administrator</p>
      </div>
    </div>
  </div>
</div>

        {/* CARDS */}
       <div className="cards">
  <div className="card">
    <FaClipboardList size={35} color="#2563eb" />
    <h3>Total Complaints</h3>
    <p>{total}</p>
  </div>

  <div className="card">
    <FaClock size={35} color="orange" /><h3>Pending</h3>
    <p>{pending}</p>
  </div>

  <div className="card">
    <FaExclamationCircle size={35}
     color="#f59e0b" />
    <h3>In Progress</h3>
    <p>{progress}</p>
  </div>

  <div className="card">
    <FaCheckCircle size={35} color="green" />
    <h3>Resolved</h3>
    <p>{resolved}</p>
  </div>
</div>

        {/* FILTERS */}
        <div className="filters">

          <select
            value={tempStatus}
            onChange={(e) => setTempStatus(e.target.value)}
          >
            <option>All Status</option>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>

          <select
            value={tempCategory}
            onChange={(e) => setTempCategory(e.target.value)}
          >
            <option>All Categories</option>
            <option>Roads</option>
            <option>Sanitation</option>
            <option>Water</option>
          </select>

          <div className="date-box">
            <FaCalendarAlt />
            <input type="date" />
          </div>

          <div className="date-box">
            <FaCalendarAlt />
            <input type="date" />
          </div>

          <input
            type="text"
            placeholder="Search complaints..."
            className="search"
            value={tempSearch}
            onChange={(e) => setTempSearch(e.target.value)}
          />

          <button className="filter-btn" onClick={handleFilter}>
            <FaFilter /> Filter
          </button>
        </div>

        {/* TABLE */}
        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Complaint</th>
                <th>User</th>
                <th>Category</th>
                <th>Location</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredComplaints.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.user}</td>
                  <td>{item.category}</td>
                  <td>{item.location}</td>
                  <td><span
                  className={
                    item.status === "Pending"
                    ? "pending"
                    : item.status === "In Progress"
                    ? "progress"
                    : "resolved"
                     }
  >
                     {item.status}
                 </span>
                  </td>
                  <td>{item.date}</td>
                  <td>
                     <button
                className="update-btn"
                onClick={() => handleUpdate(item.id)}
               >update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;