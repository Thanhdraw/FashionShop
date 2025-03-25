<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quản Lý Shop Thời Trang</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 min-h-screen">
    <div class="flex">
        <!-- Sidebar -->
        <div class="w-64 bg-white shadow-md h-screen fixed left-0 top-0">
            <div class="p-6 border-b">
                <h1 class="text-2xl font-bold text-gray-800">Fashion Admin</h1>
            </div>
            <nav class="p-4">
                <ul class="space-y-2">
                    <li>
                        <a href="#" class="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Tổng Quan
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                            Sản Phẩm
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            Khách Hàng
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
                            </svg>
                            Đơn Hàng
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Cài Đặt
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

        <!-- Main Content -->
        <div class="ml-64 flex-1 p-10">
            <!-- Top Bar -->
            <div class="flex justify-between items-center mb-8">
                <h2 class="text-3xl font-bold text-gray-800">Bảng Điều Khiển</h2>
                <div class="flex items-center space-x-4">
                    <div class="relative">
                        <input type="text" placeholder="Tìm kiếm..." class="pl-10 pr-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute left-3 top-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
                        Thêm Sản Phẩm Mới
                    </button>
                </div>
            </div>

            <!-- Dashboard Stats -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div class="bg-white shadow-md rounded-lg p-6 text-center">
                    <h3 class="text-gray-500 mb-2">Tổng Sản Phẩm</h3>
                    <p class="text-3xl font-bold text-blue-600">254</p>
                </div>
                <div class="bg-white shadow-md rounded-lg p-6 text-center">
                    <h3 class="text-gray-500 mb-2">Đơn Hàng Mới</h3>
                    <p class="text-3xl font-bold text-green-600">42</p>
                </div>
                <div class="bg-white shadow-md rounded-lg p-6 text-center">
                    <h3 class="text-gray-500 mb-2">Doanh Thu</h3>
                    <p class="text-3xl font-bold text-purple-600">$24,560</p>
                </div>
                <div class="bg-white shadow-md rounded-lg p-6 text-center">
                    <h3 class="text-gray-500 mb-2">Khách Hàng</h3>
                    <p class="text-3xl font-bold text-red-600">1,205</p>
                </div>
            </div>

            <!-- Recent Orders -->
            <div class="bg-white shadow-md rounded-lg p-6">
                <h3 class="text-xl font-semibold mb-4">Đơn Hàng Gần Đây</h3>
                <table class="w-full">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="p-3 text-left">Mã Đơn</th>
                            <th class="p-3 text-left">Khách Hàng</th>
                            <th class="p-3 text-left">Sản Phẩm</th>
                            <th class="p-3 text-left">Tổng Tiền</th>
                            <th class="p-3 text-left">Trạng Thái</th>
                            <th class="p-3 text-left">Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b">
                            <td class="p-3">#8901</td>
                            <td class="p-3">Nguyễn Văn A</td>
                            <td class="p-3">Áo Thun Nam</td>
                            <td class="p-3">$120</td>
                            <td class="p-3">
                                <span class="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs">Đã Giao</span>
                            </td>
                            <td class="p-3">
                                <button class="text-blue-500 hover:text-blue-700">Chi Tiết</button>
                            </td>
                        </tr>
                        <tr class="border-b">
                            <td class="p-3">#8902</td>
                            <td class="p-3">Trần Thị B</td>
                            <td class="p-3">Váy Hè</td>
                            <td class="p-3">$85</td>
                            <td class="p-3">
                                <span class="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-xs">Đang Xử Lý</span>
                            </td>
                            <td class="p-3">
                                <button class="text-blue-500 hover:text-blue-700">Chi Tiết</button>
                            </td>
                        </tr>
                        <tr>
                            <td class="p-3">#8903</td>
                            <td class="p-3">Lê Văn C</td>
                            <td class="p-3">Quần Jean</td>
                            <td class="p-3">$65</td>
                            <td class="p-3">
                                <span class="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs">Đã Thanh Toán</span>
                            </td>
                            <td class="p-3">
                                <button class="text-blue-500 hover:text-blue-700">Chi Tiết</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</body>
</html>