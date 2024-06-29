<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Models\Subcategory;
use App\Models\Product;
use App\Traits\HttpRequests;
use Exception;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    use HttpRequests;

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $queryString = $request->input('q');


        $products = Product::with('category')
            ->select('id', 'name', 'category_id', 'stock', 'thumbnail_url', 'price', 'discount_percentage')
            ->when($queryString, function ($query, $queryString) {
                // Add condition to filter by product name
                return $query->where('name', 'like', '%' . $queryString . '%');
            })
            ->orderBy('name', 'asc')
            ->get();
        //dd($products);

        return $this->success([
            'products' => $products
        ]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        try {
            $request->validated();

            $category = Category::firstOrCreate(
                ['name' => strtolower($request['category'])]
            );

            // subcategories logic
            $subcategoriesArray = explode(", ", $request['subcategory']);
            $subcategoriesArray = array_map('trim', $subcategoriesArray);
            $subcategoryIds = [];

            foreach ($subcategoriesArray as $item) {
                $subcategory = Subcategory::firstOrCreate(['name' => $item, 'category_id' => $category->id]);
                $subcategoryIds[] = $subcategory->id;
            }

            // $subcategory = Subcategory::firstOrCreate(
            //     ['name' => strtolower($request['subcategory'])],
            //     ['category_id' => $category->id]
            // );

            $product = Product::create([
                'name' => $request->name,
                'description' => $request->description,
                'category_id' => $category->id,
                'price' => $request->price,
                'discount_percentage' => $request->discount_percentage,
                'stock' => $request->stock,
                'brand' => $request->brand,
                'sku' => $request->sku,
                'weight' => $request->weight,
                'shipping_information' => $request->shipping_information,
                'availability_status' => $request->availability_status,
                'image_url' => $request->image_url,
                'thumbnail_url' => $request->thumbnail_url,
            ]);

            $product->subcategories()->sync($subcategoryIds);

            $product->save();

            return $this->success(null, $product);
        } catch (Exception $e) {
            return $this->error(
                null,
                $e
            );
        }

    }
    public function show(Product $product)
    {
        return $this->success(['product' => new ProductResource($product)]);
    }

    public function update(StoreProductRequest $request, Product $product)
    {
        try {
            $request->validated();

            $category = Category::firstOrCreate(
                ['name' => strtolower($request['category'])]
            );

            // subcategories logic
            $subcategoriesArray = explode(", ", $request['subcategory']);
            $subcategoriesArray = array_map('trim', $subcategoriesArray);
            $subcategoryIds = [];

            foreach ($subcategoriesArray as $item) {
                $subcategory = Subcategory::firstOrCreate(['name' => $item, 'category_id' => $category->id]);
                $subcategoryIds[] = $subcategory->id;
            }

            $product->update([
                'name' => $request->name,
                'description' => $request->description,
                'category_id' => $category->id,
                'price' => $request->price,
                'discount_percentage' => $request->discount_percentage,
                'stock' => $request->stock,
                'brand' => $request->brand,
                'sku' => $request->sku,
                'weight' => $request->weight,
                'shipping_information' => $request->shipping_information,
                'availability_status' => $request->availability_status,
                'image_url' => $request->image_url,
                'thumbnail_url' => $request->thumbnail_url,
            ]);

            $product->subcategories()->sync($subcategoryIds);

            $product->save();

            return $this->success(null, $product);
        } catch (Exception $e) {
            return $this->error(
                null,
                $e
            );
        }
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return $this->success(null, $product);

    }
}
