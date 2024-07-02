<?php

use App\Http\Controllers\EmailVerificationController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PasswordResetController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\VerificationController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/email/verify', [EmailVerificationController::class, 'notice'])->name('verification.notice');
    Route::get('/email/verify/{id}/{hash}', [EmailVerificationController::class, 'verify'])->middleware(['signed'])->name('verification.verify');
    Route::get('/email/resend', [EmailVerificationController::class, 'resend'])->name('verification.send');

    Route::get('/user', [AuthController::class, 'user']);

    //is admin request
    Route::get('/admin/verify', [AuthController::class, 'isAdmin']);

    // reset password
    Route::post('/password/reset', [AuthController::class, 'resetPassword']);

    Route::post('/logout', [AuthController::class, 'logout']);
});

Route::middleware(['auth:sanctum', 'verified', 'ability:admin'])->group(function () {
    Route::get('/products/{product}', [ProductController::class, 'show']);
    Route::post('/products', [ProductController::class, 'store']);
    Route::patch('/products/{product}', [ProductController::class, 'update']);
    Route::delete('/products/{product}', [ProductController::class, 'destroy']);

    Route::get('/categories', [CategoryController::class, 'index']);
    Route::get('/categories/{category}', [CategoryController::class, 'show']);
    Route::post('/categories', [CategoryController::class, 'store']);
    Route::patch('/categories/{category}', [CategoryController::class, 'update']);
    Route::delete('/categories/{category}', [CategoryController::class, 'destroy']);
    // Route::get('/orders', [OrderController::class, 'user_orders']);
});

Route::post('/orders', [OrderController::class, 'store'])
    ->middleware(['auth:sanctum', 'verified', 'ability:place-order']);

//The response will change depending on whether the request is made by a normal user or an admin
Route::get('/orders', [OrderController::class, 'index'])
    ->middleware(['auth:sanctum', 'verified', 'ability:admin,view-own-orders']);


Route::get('/products', [ProductController::class, 'index']);

Route::middleware(['guest'])->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);

    Route::post('/password/email', [PasswordResetController::class, 'sendLink'])->name('password.reset');
    Route::post('/password/reset', [PasswordResetController::class, 'reset']);
});

