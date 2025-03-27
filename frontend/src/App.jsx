import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/shop/Home";
import Header from "./components/layout/Header";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CategoryPage from "./pages/shop/CategoryPage";
import ProductPage from "./pages/shop/ProductPage";
import ProductDetailPage from "./pages/shop/ProductDetailPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import CartPage from "./pages/shop/CartPage";
import { CartProvider } from "./context/cart/CartContext";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/category/:category" element={<ProductPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}
