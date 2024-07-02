<?php

use App\Http\Controllers\EmailVerificationController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PasswordResetController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\WishlistController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;

// Guest Routes
Route::middleware(['guest'])->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/password/email', [PasswordResetController::class, 'sendLink'])->name('password.reset');
    Route::post('/password/reset', [PasswordResetController::class, 'reset']);
});

// Email Verification Routes
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/email/verify', [EmailVerificationController::class, 'notice'])->name('verification.notice');
    Route::get('/email/verify/{id}/{hash}', [EmailVerificationController::class, 'verify'])->middleware(['signed'])->name('verification.verify');
    Route::get('/email/resend', [EmailVerificationController::class, 'resend'])->name('verification.send');
});

// Authenticated User Routes
Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::get('/user', [AuthController::class, 'user']);
    Route::post('/logout', [AuthController::class, 'logout']);

    // User Wishlist Routes
    Route::post('/wishlist', [WishlistController::class, 'addToWishlist']);
    Route::get('/wishlist', [WishlistController::class, 'viewWishlist']);
    Route::delete('/wishlist/{productId}', [WishlistController::class, 'removeFromWishlist']);

    // Order Route for placing an order
    Route::post('/orders', [OrderController::class, 'store'])->middleware('ability:place-order');
});

// Admin Routes
Route::middleware(['auth:sanctum', 'verified', 'ability:admin'])->group(function () {
    // Admin Product Routes
    Route::get('/products/{product}', [ProductController::class, 'show']);
    Route::post('/products', [ProductController::class, 'store']);
    Route::patch('/products/{product}', [ProductController::class, 'update']);
    Route::delete('/products/{product}', [ProductController::class, 'destroy']);

    // Admin Category Routes
    Route::get('/categories', [CategoryController::class, 'index']);
    Route::get('/categories/{category}', [CategoryController::class, 'show']);
    Route::post('/categories', [CategoryController::class, 'store']);
    Route::patch('/categories/{category}', [CategoryController::class, 'update']);
    Route::delete('/categories/{category}', [CategoryController::class, 'destroy']);

    // Admin Wishlist Routes
    Route::get('/wishlist/by-category', [WishlistController::class, 'viewWishlistByCategory']);

    // Admin Order Verification Route
    Route::get('/admin/verify', [AuthController::class, 'isAdmin']);
});

// Common Routes for Authenticated Users and Admins
Route::middleware(['auth:sanctum', 'verified', 'ability:admin,view-own-orders'])->group(function () {
    Route::get('/orders', [OrderController::class, 'index']);
});

// Public Product Routes
Route::get('/products', [ProductController::class, 'index']);
