<?php
namespace App\Interfaces;

use Illuminate\Http\Request;

interface AuthServiceInterface
{
    public function register(array $data);
    public function login(array $credentials);
    public function logout(Request $request);

}

