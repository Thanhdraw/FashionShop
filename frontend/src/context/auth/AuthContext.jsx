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
        const token = localStorage.getItem("token");
        if (token) {
          const userData = await getUser();
          if (userData) {
            setUser(userData);
          } else {
            console.warn("User data is null");
          }
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.log("Unauthorized, logging out...");
          localStorage.removeItem("token");
        }
        console.error("Error checking user status:", error);
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
    <AuthContext.Provider value={{ user, setUser, logout, login, loading }}>
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
