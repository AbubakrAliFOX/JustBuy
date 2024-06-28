<?php

namespace App\Http\Resources;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $subcategories = Category::with('subcategories')->findOrFail($this->id)->subcategories;

        return [
            'name' => $this->name,
            'subcategory' => $subcategories->pluck('name')->implode(', '),
        ];
    }
}
