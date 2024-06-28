<?php

namespace App\Http\Resources;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $subcategories = Product::with('subcategories')->findOrFail($this->id)->subcategories;

        return [
            'name' => $this->name,
            'description' => $this->description,
            'category' => Category::find($this->category_id)->name,
            'subcategory' => $subcategories->pluck('name')->implode(', '),
            'price' => $this->price,
            'discount_percentage' => $this->discount_percentage,
            'stock' => $this->stock,
            'brand' => $this->brand,
            'sku' => $this->sku,
            'weight' => $this->weight,
            'shipping_information' => $this->shipping_information,
            'availability_status' => $this->availability_status,
            'image_url' => $this->image_url,
            'thumbnail_url' => $this->thumbnail_url,
        ];
    }
}
