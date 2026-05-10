import React, { useState } from "react";

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

  const [complaints, setComplaints] = useState([

    {
      id:1,
      title:"Pothole on MG Road",
      user:"Rahul Kumar",
      category:"Roads",
      location:"MG Road, Bengaluru",
      status:"In Progress",
      date:"20 May 2024",
      image:"https://via.placeholder.com/60",
    },

    {
      id:2,
      title:"Garbage Overflowing",
      user:"Sneha Reddy",
      category:"Sanitation",
      location:"HSR Layout",
      status:"Pending",
      date:"18 May 2024",
      image:"https://via.placeholder.com/60",
    },

    {
      id:3,
      title:"Water Leakage",
      user:"Arun Prakash",
      category:"Water",
      location:"Koramangala",
      status:"Resolved",
      date:"15 May 2024",
      image:"https://via.placeholder.com/60",
    },

  ]);

  const handleUpdate = (id) => {

    const updated = complaints.map((item) => {

      if(item.id === id){

        if(item.status === "Pending"){
          return {...item, status:"In Progress"};
        }

        else if(item.status === "In Progress"){
          return {...item, status:"Resolved"};
        }

      }

      return item;

    });

    setComplaints(updated);
  };

  const total = complaints.length;

  const pending = complaints.filter(
    item => item.status === "Pending"
  ).length;

  const progress = complaints.filter(
    item => item.status === "In Progress"
  ).length;

  const resolved = complaints.filter(
    item => item.status === "Resolved"
  ).length;

  return (

    <div className="dashboard">

      {/* SIDEBAR */}

      <div className="sidebar">

        <div>

          <div className="logo-section">
           <div
  style={{
    display:"flex",
    alignItems:"center",
    gap:"10px",
  }}
>
  <FaCheckCircle
    size={35}
    color="#3b82f6"
  />

  <h2>CivicTrack</h2>
</div>
            <p>Civic Issue Management</p>
          </div>

          <div className="menu">

            <div className="menu-item active">
              <FaHome />
              Dashboard
            </div>

            <div className="menu-item">
              <FaClipboardList />
              All Complaints
            </div>

            <div className="menu-item">
              <FaUsers />
              Users
            </div>

            <div className="menu-item">
              <FaChartBar />
              Reports
            </div>

            <div className="menu-item">
              <FaCog />
              Settings
            </div>

            <div className="menu-item">
              <FaBell />
              Notifications
            </div>

            <div className="menu-item">
              <FaSignOutAlt />
              Logout
            </div>

          </div>

        </div>

        <div className="help-box">

          <FaHeadset size={40} />

          <h3>Need Help?</h3>

          <p>Contact support for issues</p>

          <button>
            Contact Support
          </button>

        </div>

      </div>

      {/* MAIN */}

      <div className="main">

        {/* TOPBAR */}

        <div className="topbar">

          <div>
            <h1>Admin Dashboard</h1>
            <p>Overview of all reported issues</p>
          </div>

          <div className="topbar-right">

            <div className="notification">
              <FaBell />
              <div className="badge">3</div>
            </div>

            <div className="admin-user">
              <img
                src="https://via.placeholder.com/40"
                alt=""
                style={{
                  borderRadius:"50%"
                }}
              />

              <span>Admin User</span>
            </div>

          </div>

        </div>

        {/* CARDS */}
         <div className="cards">

  <div className="card">

    <FaClipboardList
      size={35}
      color="#2563eb"
    />

    <h3>Total Complaints</h3>

    <p>{total}</p>

  </div>

  <div className="card">

    <FaClock
      size={35}
      color="orange"
    />

    <h3>Pending</h3>

    <p>{pending}</p>

  </div>

  <div className="card">

    <FaExclamationCircle
      size={35}
      color="#2563eb"
    />

    <h3>In Progress</h3>

    <p>{progress}</p>

  </div>

  <div className="card">

    <FaCheckCircle
      size={35}
      color="green"
    />

    <h3>Resolved</h3>

    <p>{resolved}</p>

  </div>

</div>

        {/* FILTERS */}

        <div className="filters">

  <select>
    <option>All Status</option>
    <option>Pending</option>
    <option>In Progress</option>
    <option>Resolved</option>
  </select>

  <select>
    <option>All Categories</option>
    <option>Infrastructure</option>
    <option>Environment</option>
    <option>Public Safety</option>
  </select>

  {/* FROM DATE */}

  <div className="date-box">

    <FaCalendarAlt />

    <input
      type="date"
    />

  </div>

  {/* TO DATE */}

  <div className="date-box">

    <FaCalendarAlt />

    <input
      type="date"
    />

  </div>

  {/* SEARCH */}

  <input
    type="text"
    placeholder="Search complaints..."
    className="search"
  />

  {/* FILTER BUTTON */}

  <button className="filter-btn">

    <FaFilter />

    Filter

  </button>

</div>

        {/* TABLE */}

        <div className="table-box">

          <table>

            <thead>

              <tr>
                <th>#</th>
                <th>Complaint</th>
                <th>Reporter</th>
                <th>Category</th>
                <th>Location</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>

            </thead>

            <tbody>

              {complaints.map((item,index)=>(

                <tr key={item.id}>

                  <td>{index+1}</td>

                  <td>

                    <div className="complaint-info">

                      <img
                        src={item.image}
                        className="complaint-img"
                        alt=""
                      />

                      <div>
                        <h4>{item.title}</h4>
                      </div>

                    </div>

                  </td>

                  <td>{item.user}</td>

                  <td>{item.category}</td>

                  <td>{item.location}</td>

                  <td>

                    <span className={
                      item.status === "Pending"
                      ? "status pending"
                      : item.status === "In Progress"
                      ? "status progress"
                      : "status resolved"
                    }>
                      {item.status}
                    </span>

                  </td>

                  <td>{item.date}</td>

                  <td>

                    <button
                      className="update-btn"
                      onClick={() => handleUpdate(item.id)}
                    >
                      Update Status
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

          {/* PAGINATION */}

          <div className="pagination">

            <button className="page-btn">
              {"<"}
            </button>

            <button className="page-btn page-active">
              1
            </button>

            <button className="page-btn">
              2
            </button>

            <button className="page-btn">
              3
            </button>

            <button className="page-btn">
              {">"}
            </button>

          </div>

        </div>

      </div>

    </div>

  );
}

export default AdminDashboard;