<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoryRequest;
use App\Http\Resources\CategoryResource;
use Exception;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Subcategory;
use App\Models\Product;
use App\Traits\HttpRequests;

class CategoryController extends Controller
{
    use HttpRequests;

    public function index()
    {
        $categories = Category::select('id', 'name')
            ->orderBy('name', 'asc')
            ->get();

        return $this->success([
            'categories' => $categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request)
    {
        try {
            $request->validated();

            $category = Category::firstOrCreate(
                ['name' => strtolower($request['name'])]
            );

            // subcategories logic
            $subcategoriesArray = explode(", ", $request['subcategory']);
            $subcategoriesArray = array_map('trim', $subcategoriesArray);
            $subcategoryIds = [];

            foreach ($subcategoriesArray as $item) {
                $subcategory = Subcategory::firstOrCreate(['name' => $item, 'category_id' => $category->id]);
                $subcategoryIds[] = $subcategory->id;
            }

            return $this->success(null, $category);
        } catch (Exception $e) {
            return $this->error(
                null,
                $e
            );
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        return $this->success(['category' => new CategoryResource($category)]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreCategoryRequest $request, Category $category)
    {
        try {
            $request->validated();

            // subcategories logic

            // delete old subcategories related to this category
            $category->subcategories()->delete();

            // get new subcategoires
            $subcategoriesArray = explode(", ", $request['subcategory']);
            $subcategoriesArray = array_map('trim', $subcategoriesArray);
            $subcategoryIds = [];

            foreach ($subcategoriesArray as $item) {
                $subcategory = Subcategory::firstOrCreate(['name' => $item, 'category_id' => $category->id]);
                $subcategoryIds[] = $subcategory->id;
            }

            $category->update([
                'name' => $request->name,
            ]);

            $category->save();

            return $this->success(null, $category);
        } catch (Exception $e) {
            return $this->error(
                null,
                $e
            );
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        $category->delete();
        return $this->success(null, $category);
    }
}
