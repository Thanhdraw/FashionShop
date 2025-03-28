import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../services/categoryService";
import { getUser } from "../../services/authService";
import { FaUserCircle } from "react-icons/fa";
import api from "../../services/api";
import { useAuth } from "../../context/auth/AuthContext";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user, logout } = useAuth();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        console.log("Dữ liệu trả về từ API:", data);

        if (data && typeof data === "object") {
          if (Array.isArray(data.categories)) {
            setCategories(data.categories);
          } else if (Array.isArray(data)) {
            setCategories(data);
          } else {
            console.error("Dữ liệu không hợp lệ:", data);
            throw new Error("Dữ liệu API không hợp lệ.");
          }
        } else {
          throw new Error("Dữ liệu API không hợp lệ.");
        }
      } catch (err) {
        console.error(err);
        setError("Không thể tải danh mục.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <p>Đang tải danh mục...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <header className="bg-white shadow-md">
      {/* Top bar */}
      <div className="py-2 text-white bg-black">
        <div className="container flex items-center justify-between px-4 mx-auto">
          <p className="text-sm">
            Miễn phí vận chuyển cho đơn hàng trên 500.000đ
          </p>
          <div className="flex space-x-4">
            {user ? (
              // Đã đăng nhập -> Hiện avatar & Logout
              <div className="flex items-center space-x-2">
                <FaUserCircle size={24} />
                <button
                  onClick={logout}
                  className="text-sm hover:text-gray-300"
                >
                  Đăng xuất
                </button>
              </div>
            ) : (
              // Chưa đăng nhập -> Hiện Đăng nhập & Đăng ký
              <>
                <Link to="/login" className="text-sm hover:text-gray-300">
                  Đăng nhập
                </Link>
                <Link to="/register" className="text-sm hover:text-gray-300">
                  Đăng ký
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="container px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-3xl font-bold text-black">
            FASHION<span className="text-pink-500">SHOP</span>
          </a>

          {/* Search bar */}
          <div className="items-center hidden w-1/3 px-3 py-2 bg-gray-100 rounded-md md:flex">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              className="w-full bg-transparent border-none focus:outline-none"
            />
            <button>
              <i className="text-gray-500 fas fa-search"></i>
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-black">
              <i className="text-xl far fa-heart"></i>
            </a>
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-black"
            >
              <i className="text-xl fas fa-shopping-bag"></i>
              <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-pink-500 rounded-full -top-2 -right-2">
                3
              </span>
            </Link>

            <a href="#" className="text-gray-700 hover:text-black md:hidden">
              <i className="text-xl fas fa-bars"></i>
            </a>
          </div>
        </div>
      </div>

      <nav className="hidden border-t border-gray-200 md:block">
        <div className="container px-4 mx-auto">
          <ul className="flex py-3 space-x-8">
            <li>
              <a
                href="/"
                className="font-medium text-black hover:text-pink-500"
              >
                Trang chủ
              </a>
            </li>
            <Link
              to="/category"
              className="font-medium text-gray-600 hover:text-pink-500"
            >
              Tất cả danh mục
            </Link>
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  to={`/category/${category.slug}`}
                  className="font-medium text-gray-600 hover:text-pink-500"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
