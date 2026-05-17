import React, { useState } from "react";
import { sendSupportMessage } from "../api/api";
import "./Support.css";

function Support() {
  const [message, setMessage] = useState("");

  const handleEmail = async () => {
    const supportData = {
      name: localStorage.getItem("username"),
      email: localStorage.getItem("email"),
      subject: "CivicTrack Support Request",
      message,
    };

    try {
      await sendSupportMessage(supportData);

      const email = "support@civictrack.com";
      const subject = "CivicTrack Support Request";
      const body = message;

      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

      alert("Support message saved successfully ✅");
    } catch (error) {
      console.log(error);
      alert("Support message failed ❌");
    }
  };

  return (
    <div className="support-container">
      <div className="support-card">
        <h1>Contact Support</h1>

        <p className="support-subtitle">
          Need help? Contact our support team.
        </p>

        <div className="support-info">
          <p>
            <strong>Email:</strong> support@civictrack.com
          </p>

          <p>
            <strong>Phone:</strong> +91 9876543210
          </p>
        </div>

        <textarea
          placeholder="Describe your issue..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button onClick={handleEmail}>
          Send Email
        </button>
      </div>
    </div>
  );
}

export default Support;