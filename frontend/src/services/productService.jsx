import api from "./api";

export const getProductsByCategory = async (categoryName) => {
  try {
    const response = await api.get(
      `/products-by-category?category=${categoryName}`
    );
    return response.data.products;
  } catch (error) {
    console.error(
      "Lỗi khi tải sản phẩm:",
      error.response?.data || error.message
    );
    return [];
  }
};
