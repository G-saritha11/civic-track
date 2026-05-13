const BASE_URL = "http://localhost:5000";

// ================= AUTH =================
export const loginUser = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    return await res.json();
  } catch (err) {
    console.log("Login error:", err);
    return null;
  }
};

export const registerUser = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/api/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    return await res.json();
  } catch (err) {
    console.log("Register error:", err);
    return null;
  }
};

// ================= COMPLAINTS (USED IN ADMIN DASHBOARD) =================
export const getComplaints = async () => {
  try {
    const res = await fetch(`${BASE_URL}/complaints`);
    return await res.json();
  } catch (err) {
    console.log("Fetch complaints error:", err);
    return [];
  }
};

export const updateComplaintStatus = async (id, status) => {
  try {
    const res = await fetch(`${BASE_URL}/complaints/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    return await res.json();
  } catch (err) {
    console.log("Update complaint error:", err);
    return null;
  }
};

// ================= USERS =================
export const getUsers = async () => {
  try {
    const res = await fetch(`${BASE_URL}/users`);
    return await res.json();
  } catch (err) {
    console.log("Users fetch error:", err);
    return [];
  }
};

// ================= REPORTS =================
export const getReports = async () => {
  try {
    const res = await fetch(`${BASE_URL}/reports`);
    return await res.json();
  } catch (err) {
    console.log("Reports fetch error:", err);
    return [];
  }
};

// ================= NOTIFICATIONS =================
export const getNotifications = async () => {
  try {
    const res = await fetch(`${BASE_URL}/notifications`);
    return await res.json();
  } catch (err) {
    console.log("Notifications fetch error:", err);
    return [];
  }
};