import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../services/authService";
// import { useAuth } from "../../context/AuthContext"; // Nếu có AuthContext

function RegisterPage() {
  // Nếu bạn có hàm register từ AuthContext, bỏ comment dòng dưới
  // const { register } = useAuth();
  const navigate = useNavigate();

  // State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validation cơ bản
    if (!email || !password || !confirmPass) {
      setError("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    if (password !== confirmPass) {
      setError("Mật khẩu không khớp!");
      return;
    }

    try {
      // Gọi hàm register nếu có API thật
      await register({
        name: name,
        email: email,
        password: password,
        password_confirmation: confirmPass,
        role: "user",
      });

      // Giả lập đăng ký thành công
      console.log("Đăng ký thành công với email:", email);
      navigate("/login"); // Chuyển hướng về trang chủ
    } catch (err) {
      setError("Đăng ký thất bại!");
    }
  };

  return (
    <div className="max-w-md p-6 mx-auto mt-10 bg-gray-200 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center">Đăng ký</h2>
      {error && <p className="mt-2 text-center text-red-500">{error}</p>}

      <form onSubmit={handleRegister} className="mt-4">
        <label className="block mb-1 text-gray-700">Họ & tên:</label>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Họ và tên"
            className="w-full p-2 my-2 border rounded-lg"
            onChange={(e) => setName(e.target.value)}
          />
          <label className="block mb-1 text-gray-700">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Email của bạn"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Mật khẩu</label>
          <input
            type="password"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Xác nhận mật khẩu</label>
          <input
            type="password"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Nhập lại mật khẩu"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Đăng ký
        </button>
        <Link
          to="/login"
          className="flex justify-center mt-3 ml-3 text-blue-600 hover:underline"
        >
          Đăng nhập
        </Link>
      </form>
    </div>
  );
}

export default RegisterPage;
