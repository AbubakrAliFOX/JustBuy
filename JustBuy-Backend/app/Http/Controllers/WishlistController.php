<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Traits\HttpRequests;
use Auth;
use Illuminate\Http\Request;

class WishlistController extends Controller
{
    use HttpRequests;

    public function addToWishlist(Request $request)
    {
        $request->validate(['product_id' => 'required|exists:products,id']);

        $user = Auth::user();

        //check wether the product has already been wishlisted
        if ($user->wishlist()->where('product_id', $request->product_id)->exists()) {
            return $this->error(null, 'Product is already in the wishlist');
        }

        $user->wishlist()->attach($request->product_id);

        return $this->success(null, 'Product added to wishlist');
    }

    public function viewWishlist()
    {
        $user = Auth::user();
        $wishlist = $user->wishlist()
            ->select(
                'products.id',
                'products.name',
                'products.price',
                'products.discount_percentage',
                'products.shipping_information',
                'products.availability_status',
                'categories.name as category_name'
            )
            ->join('categories', 'products.category_id', '=', 'categories.id')
            ->get();

        return $this->success(['wishlist' => $wishlist]);
    }

    public function removeFromWishlist($productId)
    {
        $user = Auth::user();
        $user->wishlist()->detach($productId);

        return $this->success(null, 'Product removed from wishlist');
    }

    public function viewWishlistByCategory()
    {
        $wishlists = Product::with('category')
            ->whereHas('wishlists')
            ->get()
            ->groupBy('category.name');

        $result = $wishlists->map(function ($products, $category) {
            return [
                'category' => $category,
                'products' => $products->map(function ($product) {
                    return [
                        'product_id' => $product->id,
                        'product_name' => $product->name,
                    ];
                })->values()
            ];
        })->values();

        return $this->success(['wishlistByCategory' => $result]);


    }
}
