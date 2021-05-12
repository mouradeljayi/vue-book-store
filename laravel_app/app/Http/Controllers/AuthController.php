<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use App\Models\User;


class AuthController extends Controller
{
    public function register(Request $request)
    {
      $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:users',
        'password' => 'required|string|min:6|confirmed'
      ]);

      User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
      ]);

      //$token = $user->createToken('myAppToken')->plainTextToken;
      //$response = [
      //  'user' => $user,
      //  'token' => $token
      //];

      //return response($response, 201);

      //return response()->json(['msg' => 'Registered Successfully']);
    }

    public function login(Request $request)
    {
      $request->validate([
        'email' => 'required',
        'password' => 'required'
      ]);

      if(Auth::attempt($request->only('email', 'password')))
      {
        return response()->json(Auth::user(), 200);
      }
      return response([
        'cred_error' => 'The provided credentials are incorrect.'
        ], 401);

      // Check email
      //$user =  User::where('email', $fields['email'])->first();

      // Check password
    //  if(!$user || !Hash::check($fields['password'], $user->password))
    //  {
    //    return response([
    //      'message' => 'Bad creds'
      //  ], 401);
    //  }

      //$token = $user->createToken('myAppToken')->plainTextToken;
      //$response = [
      //  'user' => $user,
      //  'token' => $token
      //];

      //return response($response, 201);
    }

    public function logout(Request $request)
    {
      //auth()->user()->tokens()->delete();
      //return [
      //  'message' => 'Logged out',
      //];
      Auth::logout();
    }
}
