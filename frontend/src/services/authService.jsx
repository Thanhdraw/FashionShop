import axios from "axios";
import api from "../services/api";

export const register = async (userData) => {
  try {
    const response = await api.post("/register", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Lỗi không xác định" };
  }
};

export const login = async (userLogin) => {
  try {
    const response = await api.post("/login", userLogin);
    console.log(response.data);
    localStorage.setItem("token", response.data.token); // Lưu tok
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Lỗi không xác định" };
  }
};

export const getUser = async () => {
  try {
    const token = localStorage.getItem("token");
    console.log("Token:", token); // ✅ Kiểm tra token có tồn tại không
    const response = await api.get("/user", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("User data:", response.data); // ✅ Kiểm tra dữ liệu API trả về
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};
