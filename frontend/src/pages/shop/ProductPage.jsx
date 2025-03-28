import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductsByCategory } from "../../services/productService";
import { useCart } from "../../context/cart/CartContext";

const ProductPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [selectedSize, setSelectedSize] = useState({});
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProductsByCategory(category);
      setProducts(data.products);
    };
    fetchProducts();
  }, [category]);

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-10 text-4xl font-extrabold text-center text-gray-800 capitalize">
        Sản phẩm {category}
      </h1>

      {products.length === 0 ? (
        <div className="flex items-center justify-center h-64">
          <p className="text-xl font-semibold text-gray-500">
            Không có sản phẩm nào trong danh mục này
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden transition-all duration-300 transform bg-white shadow-lg rounded-xl hover:scale-105 hover:shadow-2xl"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image || "https://via.placeholder.com/300"}
                  alt={product.name}
                  className="object-cover w-full h-64"
                />
                {product.discount && (
                  <span className="absolute px-3 py-1 text-sm font-bold text-white bg-red-500 rounded-full top-4 right-4">
                    {product.discount}%
                  </span>
                )}
              </div>

              {/* Product Details */}
              <div className="p-5">
                <h2 className="mb-2 text-xl font-bold text-gray-900 truncate">
                  {product.name}
                </h2>

                <div className="flex items-center justify-between mb-4">
                  <p className="text-lg font-bold text-blue-600">
                    {product.price.toLocaleString()}đ
                  </p>
                  {product.originalPrice && (
                    <p className="text-sm text-gray-500 line-through">
                      {product.originalPrice.toLocaleString()}đ
                    </p>
                  )}
                </div>

                {/* Size Selection */}
                <div className="mb-4">
                  <h3 className="mb-2 text-sm font-semibold text-gray-600">
                    Chọn size:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes?.map((size) => (
                      <button
                        key={size.id}
                        className={`
                          px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200
                          ${
                            selectedSize[product.id]?.id === size.id
                              ? "bg-blue-500 text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }
                          ${
                            size.pivot.stock === 0
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          }
                        `}
                        onClick={() =>
                          size.pivot.stock > 0 &&
                          setSelectedSize((prev) => ({
                            ...prev,
                            [product.id]: size,
                          }))
                        }
                        disabled={size.pivot.stock === 0}
                      >
                        {size.name} ({size.pivot.stock})
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Link
                    to={`/product/${product.id}`}
                    className="flex-1 px-4 py-2 text-center text-gray-800 transition bg-gray-100 rounded-lg hover:bg-gray-200"
                  >
                    Chi tiết
                  </Link>
                  <button
                    onClick={() => addToCart(product, selectedSize[product.id])}
                    disabled={!selectedSize[product.id]}
                    className={`
                      flex-1 py-2 px-4 rounded-lg text-white transition duration-300
                      ${
                        selectedSize[product.id]
                          ? "bg-blue-600 hover:bg-blue-700"
                          : "bg-gray-400 cursor-not-allowed"
                      }
                    `}
                  >
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
