import { useState } from "react";
// import { useAuth } from "../../context/AuthContext"; // Bỏ comment và import đúng
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
import { useAuth } from "../../context/auth/AuthContext";

import api from "../../services/api";

function LoginPage() {
  // const { login } = useAuth(); // Lấy hàm login từ AuthContext
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/login", { email, password });

      // Assuming the API returns a token and user data
      const { token, user } = response.data;

      // Store token in localStorage
      localStorage.setItem("token", token);

      // Update user in context
      login(user);

      // Redirect to home or dashboard
      window.location.href = "/";
    } catch (error) {
      console.error("Login failed:", error);
      alert("Đăng nhập thất bại");
    }
  };

  return (
    <div className="max-w-md p-6 mx-auto mt-10 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center">Đăng nhập</h2>
      {error && <p className="text-center text-red-500">{error}</p>}

      <form onSubmit={handleLogin}>
        <input
          type="email"
          className="w-full p-2 my-2 border rounded-lg"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full p-2 my-2 border rounded-lg"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full p-2 text-white bg-blue-600 rounded-lg">
          Đăng nhập
        </button>
        <div className="right-0 flex justify-center mx-3 my-3">
          <p>Neu chua co Tai khoan </p>
          <Link to="/register" className="ml-3 text-blue-600 hover:underline">
            Đăng ký
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
