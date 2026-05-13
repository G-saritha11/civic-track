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
export const updateComplaintStatus = async (id, status) => {
  const response = await fetch(`${BASE_URL}/issues/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });

  return await response.json();
};
// ================= GET USERS =================
export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  return await response.json();
};