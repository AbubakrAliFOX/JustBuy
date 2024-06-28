<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $json = file_get_contents(database_path('products.json'));
        $data = json_decode($json, true);
        $products = $data['products'];



        foreach ($products as $product) {
            // Categories
            $category = $product['category'];
            if (!DB::table('categories')->where('name', $category)->exists()) {
                $categoryId = DB::table('categories')->insertGetId(['name' => $category]);
            }

            //product
            $productId = DB::table('products')->insertGetId([
                'name' => $product['title'],
                'description' => $product['description'],
                'price' => $product['price'],
                'discount_percentage' => $product['discountPercentage'],
                'stock' => $product['stock'],
                'category_id' => $categoryId,
                'brand' => $product['brand'] ?? null,
                'sku' => $product['sku'],
                'weight' => $product['weight'],
                'shipping_information' => $product['shippingInformation'],
                'availability_status' => $product['availabilityStatus'],
                'image_url' => $product['images'][0],
                'thumbnail_url' => $product['thumbnail'],
            ]);

            // Subcategories
            foreach ($product['tags'] as $tag) {
                if ($tag != $category) {
                    $subCategory = $tag;

                    if (!DB::table('subcategories')->where('name', $subCategory)->exists()) {
                        $subCategoryId = DB::table('subcategories')->insertGetId(['name' => $subCategory, 'category_id' => $categoryId]);
                    }

                    //product_subcategories
                    DB::table('product_subcategory')->insert(['product_id' => $productId, 'subcategory_id' => $subCategoryId]);
                }
            }
        }
    }
}
