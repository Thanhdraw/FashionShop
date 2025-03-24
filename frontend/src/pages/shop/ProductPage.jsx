import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductsByCategory } from "../../services/productService";

const ProductPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProductsByCategory(category);
      setProducts(data);
    };
    fetchProducts();
  }, [category]);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center capitalize">
        Sản phẩm trong "{category}"
      </h1>
      {products.length === 0 ? (
        <p className="text-gray-500 text-center text-lg">
          Không có sản phẩm nào
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={product.image || "https://via.placeholder.com/300"}
                alt={product.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900 truncate">
                  {product.name}
                </h2>
                <p className="text-gray-600 mt-2">
                  Giá:{" "}
                  <span className="text-red-500 font-semibold">
                    {product.price}đ
                  </span>
                </p>

                <div className="mt-2">
                  <Link
                    to={`/product/${product.id}`}
                    className="text-sm text-blue-500 hover:underline "
                  >
                    Xem chi tiết
                  </Link>
                </div>
                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
