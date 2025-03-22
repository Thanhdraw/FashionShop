<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): \Illuminate\Http\JsonResponse
    {
        try {
            $categories = Category::all();
            if ($categories->isEmpty()) {
                return response()->json(['error' => 'No categories found'], 404);
            }
            return response()->json([
                'message' => 'Success get all categories',
                'categories' => $categories
            ], 200);
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
    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $request->validate([
                'name' => 'required|string',
                'description' => 'nullable|string',
                'image' => 'nullable|string',
            ]);

            $category = Category::create([
                'name' => $request->name,
                'slug' => Str::slug($request->name),
                'description' => $request->description,
                'image' => $request->image,
                'is_active' => 1,
            ]);

            return response()->json([
                'message' => 'Success create category',
                'category' => $category
            ], 201);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id): \Illuminate\Http\JsonResponse
    {
        //
        try {
            $category = Category::findorFail($id);
            if(!$category) {
                return response()->json(['error' => 'Category not found'], 404);
            }
            return response()->json([
                'message' => 'Success get category',
                'category' => $category
            ], 200);
        }catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id): \Illuminate\Http\JsonResponse
    {
        //
        try {
            $category = Category::findorFail($id);
            if(!$category) {
                return response()->json(['error' => 'Category not found'], 404);
            }
            return response()->json([
                'message' => 'Success get category',
                'category' => $category
            ], 200);
        }catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id): \Illuminate\Http\JsonResponse
    {
        //
        try {
            $validate = $request->validate([
                'name' => 'required|string',
                'description' => 'nullable|string',
                'image' => 'nullable|string',
            ]);
            $category = Category::findorFail($id);
            if ($request->name !== $category->name) {
                $validatedData['slug'] = Str::slug($request->name);
            }
            $category->update($validate);
            return response()->json([
                'message' => 'Success update category',
                'category' => $category
            ], 200);

        }catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): \Illuminate\Http\JsonResponse
    {
        //
        try {
            $category = Category::findorFail($id);
            $category->delete();
            return response()->json([
                'message' => 'Success delete category',
                'category' => $category
            ], 200);

        }catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }


}
