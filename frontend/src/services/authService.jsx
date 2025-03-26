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
    console.log(
      "Sending request to /user with token:",
      localStorage.getItem("token")
    ); // Debug

    const response = await api.get("/user");
    console.log(response.data); // Kiểm tra response
    // console.log("Roles:", response.data.role); // Kiểm tra roles

    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Không lấy được thông tin user" };
  }
};
