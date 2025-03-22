<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $categories = DB::table('categories')->pluck('id', 'slug');

        $products = [
            [
                'name' => 'Áo Thun Nam Basic',
                'slug' => 'ao-thun-nam-basic',
                'description' => 'Áo thun nam phong cách basic, phù hợp mặc hàng ngày.',
                'image' => 'uploads/products/ao-thun-nam-basic.jpg',
                'price' => 200000,
                'sale_price' => 180000,
                'category_id' => $categories['ao-thun'] ?? null,
                'is_active' => 1,
            ],
            [
                'name' => 'Quần Jeans Slimfit',
                'slug' => 'quan-jeans-slimfit',
                'description' => 'Quần jeans slimfit ôm vừa vặn, tôn dáng.',
                'image' => 'uploads/products/quan-jeans-slimfit.jpg',
                'price' => 450000,
                'sale_price' => 400000,
                'category_id' => $categories['quan-jeans'] ?? null,
                'is_active' => 1,
            ],
            [
                'name' => 'Giày Sneaker Trắng',
                'slug' => 'giay-sneaker-trang',
                'description' => 'Giày sneaker màu trắng đơn giản, dễ phối đồ.',
                'image' => 'uploads/products/giay-sneaker-trang.jpg',
                'price' => 600000,
                'sale_price' => 550000,
                'category_id' => $categories['giay-sneaker'] ?? null,
                'is_active' => 1,
            ],
            [
                'name' => 'Túi Xách Da Cao Cấp',
                'slug' => 'tui-xach-da-cao-cap',
                'description' => 'Túi xách da dành cho nam, phong cách lịch lãm.',
                'image' => 'uploads/products/tui-xach-da-cao-cap.jpg',
                'price' => 1200000,
                'sale_price' => 1100000,
                'category_id' => $categories['tui-xach'] ?? null,
                'is_active' => 1,
            ],
            [
                'name' => 'Mắt Kính Thời Trang',
                'slug' => 'mat-kinh-thoi-trang',
                'description' => 'Mắt kính nam nữ thời trang, phong cách hiện đại.',
                'image' => 'uploads/products/mat-kinh-thoi-trang.jpg',
                'price' => 350000,
                'sale_price' => 300000,
                'category_id' => $categories['phu-kien'] ?? null,
                'is_active' => 1,
            ],
        ];

        // Chèn dữ liệu vào bảng products
        DB::table('products')->insert($products);
    }
}
