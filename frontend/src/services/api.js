import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    console.log("Token gửi lên:", token);
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    console.log("Token:", localStorage.getItem("token"));

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
