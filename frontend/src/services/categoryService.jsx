import api from "../services/api";

export const getCategories = async () => {
  try {
    const response = await api.get("/categories");
    return response.data; // Không cần check response.ok
  } catch (error) {
    console.error(
      "Lỗi khi lấy danh mục:",
      error.response?.data || error.message
    );
    throw error;
  }
};
