import React from "react";
import { useCart } from "../../context/cart/CartContext";
import { useAuth } from "../../context/auth/AuthContext";
const CartPage = () => {
  const { user } = useAuth();
  const {
    cartItems = [],
    removeFromCart,
    updateQuantity,
    totalPrice,
    orderCart,
    clearCart,
  } = useCart();

  const getOrder = (e) => {
    e.preventDefault();
    orderCart(user?.id);
  };

  console.log("Cart Items:", cartItems);

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(itemId, newQuantity);
    }
  };

  return (
    <div className="max-w-4xl px-4 py-8 mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Giỏ hàng của bạn</h1>
        {cartItems?.length > 0 && (
          <button onClick={clearCart} className="...">
            Xóa tất cả
          </button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-12 rounded-lg bg-gray-50">
          <p className="text-xl text-gray-600">Giỏ hàng của bạn đang trống</p>
        </div>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center p-4 transition-shadow bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md"
            >
              <img
                src={item.image}
                alt={item.name}
                className="object-cover w-20 h-20 mr-4 rounded-md"
              />

              <div className="flex-grow">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-500">{item.size}</p>
                <p className="font-bold text-blue-600">
                  {item.price.toLocaleString()}đ
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  className="px-3 py-1 bg-gray-200 rounded"
                  onClick={() =>
                    updateQuantity(item.id, Math.max(1, item.quantity - 1))
                  }
                >
                  -
                </button>

                <span className="w-8 font-bold text-center">
                  {item.quantity}
                </span>

                <button
                  className="px-3 py-1 bg-gray-200 rounded"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="px-2 py-1 ml-4 text-red-500 border rounded hover:text-red-700"
              >
                Xóa
              </button>
            </div>
          ))}

          <div className="flex items-center justify-between p-6 rounded-lg bg-gray-50">
            <span className="text-xl font-bold text-gray-800">Tổng cộng</span>
            <span className="text-2xl font-bold text-blue-600">
              {totalPrice
                ? totalPrice.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })
                : "0 VND"}
            </span>
          </div>

          <div className="text-center">
            <button
              onClick={getOrder}
              className="w-full py-3 text-lg font-bold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Tiến hành thanh toán
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
