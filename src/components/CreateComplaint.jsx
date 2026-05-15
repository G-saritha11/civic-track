import React, { useState } from "react";

import { createComplaint } from "../api/api";

import "./CreateComplaint.css";

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
  console.log(localStorage.getItem("token"));

  const formData = new FormData();

  formData.append("title", data.title);
  formData.append("description", data.description);
  formData.append("location", data.location);
  formData.append("category", data.category);
  formData.append("image", data.image);

  const res = await createComplaint(formData);

  alert("Complaint Created ✅");

  console.log(res);

};
  return (
     <div className="create-container">
      <h1>Create Complaint</h1>

      <form className="create-form" onSubmit={handleSubmit}>

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

        <input
          type="file"
          onChange={(e) =>
          setData({
          ...data,
          image: e.target.files[0],
         })
         }
        />

        <button type="submit">
          Submit Complaint
        </button>

      </form>
    </div>
  );
}

export default CreateComplaint;