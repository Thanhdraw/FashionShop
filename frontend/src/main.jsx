import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ReactDOM from "react-dom/client"; // ✅ Import ReactDOM

import App from "./App.jsx";
import { AuthProvider } from "./context/auth/AuthContext.jsx";
import { CartProvider } from "./context/cart/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </AuthProvider>
);
