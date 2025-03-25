import { createContext, useEffect, useState, useContext } from "react";
import { getUser } from "../../services/authService";
import api from "../../services/api";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        // Check if token exists in localStorage
        const token = localStorage.getItem("token");
        if (token) {
          // Attempt to get user data
          const userData = await getUser();
          setUser(userData);
        }
      } catch (error) {
        console.error("Error checking user status:", error);
        setUser(null);
        localStorage.removeItem("token");
      } finally {
        setLoading(false);
      }
    };

    checkUserStatus();
  }, []);
  // Logout function
  const logout = async () => {
    try {
      // Call logout API
      await api.post("/logout");

      // Remove token and user data
      localStorage.removeItem("token");
      setUser(null);

      // Redirect to login page
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout error:", error);
      alert("Có lỗi khi đăng xuất. Vui lòng thử lại.");
    }
  };

  // Login function
  const login = (userData) => {
    setUser(userData);
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, user, setUser, logout, login, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
