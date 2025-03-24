import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      {/* Top bar */}
      <div className="py-2 text-white bg-black">
        <div className="container flex items-center justify-between px-4 mx-auto">
          <p className="text-sm">
            Miễn phí vận chuyển cho đơn hàng trên 500.000đ
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-sm hover:text-gray-300">
              Đăng nhập
            </a>
            <a href="#" className="text-sm hover:text-gray-300">
              Đăng ký
            </a>
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
            <a href="#" className="relative text-gray-700 hover:text-black">
              <i className="text-xl fas fa-shopping-bag"></i>
              <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-pink-500 rounded-full -top-2 -right-2">
                3
              </span>
            </a>
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
            <li>
              <Link
                to="/category"
                className="font-medium text-gray-600 hover:text-pink-500"
              >
                Tất cả danh mục
              </Link>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-pink-500">
                Nữ
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-pink-500">
                Nam
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-pink-500">
                Trẻ em
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-pink-500">
                Phụ kiện
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-pink-500">
                Khuyến mãi
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-pink-500">
                Bộ sưu tập
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-pink-500">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
