<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules()
    {
        return [
            'name' => 'required|string|min:2|max:50',
            'description' => 'required|string|min:2|max:200',
            'category' => 'required|string|min:2|max:30',
            'price' => 'required|numeric|gt:0',
            'discount_percentage' => 'required|numeric|gt:0',
            'stock' => 'required|numeric|gt:0',
            'brand' => 'required|string|max:30',
            'sku' => 'required|string|min:1|max:30',
            'weight' => 'required|numeric|gt:0',
            'shipping_information' => 'required|string|min:1|max:30',
            'availability_status' => 'required|string|min:1|max:30',
            'image_url' => 'required|string',
            'thumbnail_url' => 'required|string',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Name is required',
            'name.min' => 'Name is too short',
            'name.max' => 'Name is too long',

            'description.required' => 'Description is required',
            'description.min' => 'Description is too short',
            'description.max' => 'Description is too long',

            'category.required' => 'Category is required',
            'category.min' => 'Category is too short',
            'category.max' => 'Category is too long',

            'price.required' => 'Price is required',
            'price.gt' => 'Number must be positive',

            'discount_percentage.required' => 'Discount number is required',
            'discount_percentage.gt' => 'Discount number must be positive',

            'stock.required' => 'Stock number is required',
            'stock.gt' => 'Stock number must be positive',

            'brand.required' => 'Brand is required',
            'brand.max' => 'Brand is too long',

            'sku.required' => 'Sku is required',
            'sku.min' => 'Sku is too short',
            'sku.max' => 'Sku is too long',

            'weight.required' => 'Weight number is required',
            'weight.gt' => 'Weight number must be positive',

            'shipping_information.required' => 'Shipping information is required',
            'shipping_information.min' => 'Shipping information is too short',
            'shipping_information.max' => 'Shipping information is too long',

            'availability_status.required' => 'Availablity Status is required',
            'availability_status.min' => 'Availablity Status is too short',
            'availability_status.max' => 'Availablity Status is too long',

            'image_url.required' => 'Image Url is required',
            'thumbnail_url.required' => 'Thumbnail url is required',
        ];
    }
}
