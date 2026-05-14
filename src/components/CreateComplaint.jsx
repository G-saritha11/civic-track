import React, { useState } from "react";

import { createComplaint } from "../api/api";

function CreateComplaint() {

  const [data, setData] = useState({
    title: "",
    description: "",
    location: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await createComplaint(data);

    alert("Complaint Created ✅");

    console.log(res);

    setData({
      title: "",
      description: "",
      location: "",
    });
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>Create Complaint</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={data.title}
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="description"
          placeholder="Description"
          value={data.description}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={data.location}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Submit Complaint
        </button>

      </form>
    </div>
  );
}

export default CreateComplaint;