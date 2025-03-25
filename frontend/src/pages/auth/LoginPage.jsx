import { useState } from "react";
import { useAuth } from "../../context/AuthContext"; // Sử dụng context
import { useNavigate } from "react-router-dom";

const loginPage = () => {
  const login = useAuth();
  const nagative = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventdefault();
    try {
      await login(email, password);
      nagative("/");
    } catch (error) {
      setError("Erorr:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center">Đăng nhập</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          className="w-full p-2 border rounded-lg my-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full p-2 border rounded-lg my-2"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-blue-600 text-white p-2 rounded-lg">
          Đăng nhập
        </button>
      </form>
    </div>
  );
};
