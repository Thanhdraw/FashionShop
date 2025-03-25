<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;



class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): \Illuminate\Http\JsonResponse
    {
        //
        try {
            $products = Product::all();
            if ($products->isEmpty()) {
                return response()->json(['error' => 'No products found'], 404);
            }

            return response()->json($products, 200);

        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }





    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }
    public function getProductsByCategory(Request $request)
    {
        try {
            $categorySlug = $request->query('category');

            if (!$categorySlug) {
                return response()->json(['error' => 'Category not specified'], 400);
            }

            $products = Product::whereHas('category', function ($query) use ($categorySlug) {
                $query->where('slug', $categorySlug);
            })->get();

            if ($products->isEmpty()) {
                return response()->json(['error' => 'No products found in this category'], 404);
            }

            return response()->json(['products' => $products], 200);

        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        try {
            $product = Product::with('sizes')->find($id);
            if (!$product) {
                return response()->json(['error' => 'Product not found'], 404);
            }
            return response()->json([
                'message' => 'Success get product',
                'product' => $product
            ]);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): \Illuminate\Http\JsonResponse
    {
        //
        try {
            $product = Product::findorFail($id);
            $product->delete();
            return response()->json([
                'message' => 'Success delete product',
                'product' => $product
            ], 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }


}
