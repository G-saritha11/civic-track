import React, { useState } from "react";

function Support() {

  const [message, setMessage] = useState("");

  const handleEmail = () => {

    const email = "support@civictrack.com";

    const subject = "CivicTrack Support Request";

    const body = message;

    window.location.href =
      `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <div style={styles.container}>

      <div style={styles.card}>

        <h1 style={styles.title}>
          Contact Support
        </h1>

        <p style={styles.text}>
          Need help? Contact our support team.
        </p>

        <div style={styles.infoBox}>
          <p>
            <strong>Email:</strong>
            support@civictrack.com
          </p>

          <p>
            <strong>Phone:</strong>
            +91 9876543210
          </p>
        </div>

        <textarea
          placeholder="Describe your issue..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={styles.textarea}
        />

        <button
          style={styles.button}
          onClick={handleEmail}
        >
          Send Email
        </button>

      </div>
    </div>
  );
}

const styles = {

  container: {
    minHeight: "100vh",
    background: "#f4f7fb",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },

  card: {
    background: "white",
    padding: "30px",
    borderRadius: "15px",
    width: "450px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },

  title: {
    marginBottom: "10px",
    color: "#1e293b",
  },

  text: {
    color: "gray",
    marginBottom: "20px",
  },

  infoBox: {
    marginBottom: "20px",
    lineHeight: "2",
  },

  textarea: {
    width: "100%",
    height: "120px",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    marginBottom: "20px",
    resize: "none",
  },

  button: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    background: "#2563eb",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Support;