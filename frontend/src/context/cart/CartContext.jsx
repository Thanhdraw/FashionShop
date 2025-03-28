import { createContext, useContext, useState } from "react";

const CartContext = createContext({
  cartItems: [], // Đảm bảo mặc định là mảng rỗng
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  totalPrice: 0,
});

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]); // ✅ Đổi từ "cart" thành "cartItems"

  // Thêm sản phẩm vào giỏ hàng
  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: product.quantity || 1 }];
      }
    });
    alert("them san pham thanh cong");
  };

  // Cập nhật số lượng sản phẩm
  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    if (confirm("Bạn có muốn xóa toàn bộ giỏ hàng?")) {
      setCartItems([]);
    }
  };

  // Xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Tính tổng giá
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook để sử dụng giỏ hàng
export function useCart() {
  return useContext(CartContext);
}
