import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductsByCategory } from "../../services/productService";

const ProductPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  // Gọi useNavigate
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProductsByCategory(category);
      setProducts(data);
    };
    fetchProducts();
  }, [category]);

  return (
    <div className="p-6 mx-auto max-w-7xl">
      <h1 className="mb-6 text-3xl font-bold text-center text-gray-800 capitalize">
        Sản phẩm trong "{category}"
      </h1>
      {products.length === 0 ? (
        <p className="text-lg text-center text-gray-500">
          Không có sản phẩm nào
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden transition-transform transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl"
            >
              <img
                src={product.image || "https://via.placeholder.com/300"}
                alt={product.name}
                className="object-cover w-full h-52"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900 truncate">
                  {product.name}
                </h2>
                <p className="mt-2 text-gray-600">
                  Giá:{" "}
                  <span className="font-semibold text-red-500">
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
                <button className="w-full py-2 mt-4 text-white transition bg-blue-500 rounded-lg hover:bg-blue-600">
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
