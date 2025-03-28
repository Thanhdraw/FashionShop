<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

    //
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Áo Thun',
                'slug' => Str::slug('Áo Thun'),
                'description' => 'Danh mục áo thun nam nữ thời trang',
                'image' => 'uploads/categories/ao-thun.jpg',
                'is_active' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Quần Jeans',
                'slug' => Str::slug('Quần Jeans'),
                'description' => 'Quần jeans nam nữ đủ loại mẫu mã',
                'image' => 'uploads/categories/quan-jeans.jpg',
                'is_active' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Giày Sneaker',
                'slug' => Str::slug('Giày Sneaker'),
                'description' => 'Giày sneaker thời trang, trẻ trung',
                'image' => 'uploads/categories/giay-sneaker.jpg',
                'is_active' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Túi Xách',
                'slug' => Str::slug('Túi Xách'),
                'description' => 'Các mẫu túi xách thời trang mới nhất',
                'image' => 'uploads/categories/tui-xach.jpg',
                'is_active' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Phụ Kiện',
                'slug' => Str::slug('Phụ Kiện'),
                'description' => 'Trang sức, nón, mắt kính thời trang',
                'image' => 'uploads/categories/phu-kien.jpg',
                'is_active' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ]

        ];

        DB::table('categories')->insert($categories);
    }

}
