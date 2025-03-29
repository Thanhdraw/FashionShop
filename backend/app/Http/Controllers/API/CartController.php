<?php

namespace App\Http\Controllers\API;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use Illuminate\Validation\ValidationException;
class CartController extends Controller
{
    //



    public function store(Request $request)
    {
        try {
            // Kiểm tra người dùng đã đăng nhập hay chưa
            if (!auth()->check()) {
                return response()->json(['error' => 'Người dùng chưa đăng nhập'], 401);
            }

            // Kiểm tra dữ liệu đầu vào
            $validated = $request->validate([
                'cartItems' => 'required|array|min:1',
                'totalPrice' => 'required|numeric|min:0',
                'shipping_address' => 'required|string',
                'billing_address' => 'required|string',
                'phone_number' => 'required|string',
            ]);

            DB::beginTransaction(); // Bắt đầu transaction

            // Tạo đơn hàng
            $order = Order::create([
                'user_id' => auth()->id(),
                'total_price' => $validated['totalPrice'],
                'status' => 'pending',
                'shipping_address' => $validated['shipping_address'],
                'billing_address' => $validated['billing_address'],
                'phone_number' => $validated['phone_number'],
            ]);

            // Kiểm tra & lưu sản phẩm trong giỏ hàng
            foreach ($validated['cartItems'] as $item) {
                if (!isset($item['product_id'], $item['quantity'], $item['price'])) {
                    throw new Exception("Dữ liệu sản phẩm không hợp lệ");
                }

                // Kiểm tra sản phẩm có tồn tại không
                $productExists = Product::where('id', $item['product_id'])->exists();
                if (!$productExists) {
                    throw new Exception("Sản phẩm với ID " . $item['product_id'] . " không tồn tại");
                }

                OrderItem::create([
                    'order_id' => $order->id,
                    'product_id' => $item['product_id'],
                    'quantity' => $item['quantity'],
                    'price' => $item['price'],
                ]);
            }

            DB::commit(); // Lưu transaction

            return response()->json([
                'message' => 'Tạo đơn hàng thành công',
                'order_id' => $order->id
            ], 201);

        } catch (ValidationException $e) {
            DB::rollBack(); // Hủy transaction nếu lỗi validate
            return response()->json(['error' => $e->errors()], 422);
        } catch (Exception $e) {
            DB::rollBack(); // Hủy transaction nếu có lỗi khác
            return response()->json([
                'error' => $e->getMessage(),
                'trace' => $e->getTrace()
            ], 500);
        }
    }



}
