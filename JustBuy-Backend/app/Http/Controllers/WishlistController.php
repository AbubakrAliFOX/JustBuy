<?php

namespace App\Http\Controllers;

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
        $user->wishlist()->attach($request->product_id);

        return $this->success(null, 'Product added to wishlist');
    }

    public function viewWishlist()
    {
        $user = Auth::user();
        $wishlist = $user->wishlist()->with('category')->get();

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
            ->get()
            ->groupBy('category_name');

        return $this->success(['wishlistByCategory' => $wishlist]);
    }
}
