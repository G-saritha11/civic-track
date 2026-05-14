import React, { useEffect, useState } from "react";

import { getMyComplaints } from "../api/api";

function MyComplaints() {

  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {

    try {

      const data = await getMyComplaints();

      if (Array.isArray(data)) {
        setComplaints(data);
      } else {
        console.log("My complaints error:", data);
        setComplaints([]);
      }

    } catch (error) {

      console.log("Error fetching complaints:", error);

      setComplaints([]);
    }
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>My Complaints</h1>

      {complaints.length === 0 ? (

        <p>No Complaints Found</p>

      ) : (

        complaints.map((item) => (

          <div
            key={item._id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginTop: "10px",
              borderRadius: "10px",
            }}
          >
            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <p>Status: {item.status}</p>

          </div>
        ))
      )}
    </div>
  );
}

export default MyComplaints;