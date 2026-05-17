const BASE_URL = "http://localhost:5000/api";

// ================= LOGIN =================
export const loginUser = async (data) => {
  const response = await fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
};

// ================= REGISTER =================
export const registerUser = async (data) => {
  const response = await fetch(`${BASE_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
};

// ================= GET COMPLAINTS =================
export const getComplaints = async () => {
  const response = await fetch(`${BASE_URL}/issues`);
  return await response.json();
};

// ================= UPDATE STATUS =================
export const updateComplaintStatus = async (
  id,
  status,
  feedback
) => {

  const response = await fetch(
    `${BASE_URL}/issues/${id}`,
    {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        status,
        feedback,
      }),
    }
  );

  return await response.json();
};
// ================= GET USERS =================
export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  return await response.json();
};

// ================= MY COMPLAINTS =================
export const getMyComplaints = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${BASE_URL}/issues/my-complaints`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
};
// ================= CREATE COMPLAINT =================
export const createComplaint = async (data) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${BASE_URL}/issues`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: data,
  });

  return await response.json();
};
// ================= DELETE COMPLAINT =================
export const deleteComplaint = async (id) => {

  const token = localStorage.getItem("token");

  const response = await fetch(
    `${BASE_URL}/issues/${id}`,
    {
      method: "DELETE",

      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return await response.json();
};
// ================= SUPPORT MESSAGE =================

export const sendSupportMessage = async (data) => {

  const response = await fetch(`${BASE_URL}/support`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });

  return await response.json();
};
