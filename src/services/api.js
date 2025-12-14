import axios from "axios";

// OPTIONAL if you use APIs in future
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "",
  timeout: 10000,
});

// Example function (not used now)
export const fetchData = async (path) => {
  try {
    const res = await api.get(path);
    return { success: true, data: res.data };
  } catch (err) {
    console.error("API Error:", err);
    return { success: false };
  }
};

export default api;
