import React, { useEffect, useState } from "react";
import "./Users.css";
import "./Users.jsx";
import { getUsers, getComplaints } from "../api/api";

function Users() {

  const [users, setUsers] = useState([]);
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {

    const fetchUsers = async () => {

      try {

        const usersData = await getUsers();
        setUsers(usersData);

        const complaintsData = await getComplaints();
        setComplaints(complaintsData);

      } catch (error) {

        console.log("Error fetching data:", error);

      }
    };

    fetchUsers();

  }, []);

  return (
    <div className="users-container">

      <h1 className="users-title">
        Users Management
      </h1>

      <div className="users-grid">

        {users.map((user) => {

          const userComplaints = complaints.filter(
            (complaint) => complaint.userId === user._id
          ).length;

          return (

            <div className="user-card" key={user._id}>

              <div className="user-avatar">
              {user.name ? user.name.charAt(0) : "U"}
              </div>

              <h2>{user.name}</h2>

              <p>{user.email}</p>

              <p>
                Complaints: {userComplaints}
              </p>

              <span
                className={
                  user.role === "Admin"
                    ? "admin-role"
                    : "citizen-role"
                }
              >
                {user.role}
              </span>

            </div>

          );
        })}

      </div>
    </div>
  );
}

export default Users;