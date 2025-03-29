<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\CartController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/order', [CartController::class, 'store']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return response()->json($request->user()->load('roles'));
});



Route::apiResource('categories', App\Http\Controllers\API\CategoryController::class);
Route::apiResource('products', App\Http\Controllers\API\ProductController::class);



Route::get('/products-by-category', [ProductController::class, 'getProductsByCategory']);



