<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Size;
use App\Models\ProductSize;
use App\Models\Product;
class ProductSizeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $products = Product::all();
        $sizes = Size::all();

        foreach ($products as $product) {
            foreach ($sizes as $size) {
                ProductSize::updateOrCreate([
                    'product_id' => $product->id,
                    'size_id' => $size->id,
                ], [
                    'stock' => rand(1, 20)
                ]);
            }
        }
    }
}
