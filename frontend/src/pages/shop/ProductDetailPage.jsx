import React, { use, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../services/api";
import { useNavigate } from "react-router-dom"; // Thêm useNavigate
import { useCart } from "../../context/cart/CartContext"; // Import context

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState(null);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]); // Lưu danh sách sản phẩm trong giỏ
  const { addToCart } = useCart();
  const [cart, setCart] = useState([]);
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Vui lòng chọn size trước khi thêm vào giỏ hàng!");
      return;
    }

    const newItem = {
      id: product.id,
      name: product.name,
      price: product.sale_price || product.price,
      size: selectedSize.name,
      quantity,
      image: product.image,
    };

    addToCart(newItem); // Thêm vào giỏ hàng dùng context

    console.log("Giỏ hàng sau khi thêm:", cartItems); // Debug
    alert("Sản phẩm đã được thêm vào giỏ hàng!");
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data.product);
      } catch (error) {
        console.error("Lỗi khi tải chi tiết sản phẩm:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (error) {
    return (
      <p className="text-lg text-center text-red-500">Có lỗi xảy ra {error}</p>
    );
  }

  if (loading) {
    return <p className="text-lg text-center text-gray-500">Đang tải...</p>;
  }

  if (!product) {
    return (
      <p className="text-lg text-center text-red-500">
        Sản phẩm không tồn tại!
      </p>
    );
  }

  return (
    <div className="max-w-5xl p-6 mx-auto">
      <button
        className="px-4 py-2 mb-4 bg-gray-300 rounded-lg hover:bg-gray-400"
        onClick={() => navigate(-1)}
      >
        ← Quay về
      </button>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <img
            src={product.image || "https://via.placeholder.com/400"}
            alt={product.name}
            className="object-cover w-full rounded-lg shadow-lg h-96"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="mt-2 text-xl font-semibold text-red-500">
            {product.price}đ
          </p>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">Chọn size:</h3>
            <div className="flex gap-2 mt-2">
              {product.sizes?.map((size) => (
                <button
                  key={size.id}
                  className={`px-4 py-2 border rounded-lg ${
                    selectedSize?.id === size.id
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size.name} ({size.pivot.stock} )
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <span className="font-semibold">Số lượng:</span>
            <button
              className="px-3 py-1 bg-gray-200 rounded-lg"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              className="px-3 py-1 bg-gray-200 rounded-lg"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>

          <p className="mt-4 text-gray-700">
            {product.description || "Không có mô tả"}
          </p>
          <button
            className="px-4 py-2 mt-6 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            onClick={handleAddToCart} // Gọi hàm đúng
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
