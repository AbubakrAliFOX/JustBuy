<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginUserRequest;
use App\Http\Requests\StoreUserRequest;
use App\Traits\HttpRequests;
use App\Models\User;
use Auth;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    use HttpRequests;
    public function login(LoginUserRequest $request)
    {
        $request->validated($request->all());

        if (!Auth::attempt($request->only(['email', 'password']))) {
            return $this->error('', 'Credentials do not match', 401);
        }

        $user = User::where('email', $request->email)->first();

        $abilities = ['place-order', 'view-own-orders', 'update-profile'];

        if ($user->is_admin) {
            $abilities = ['admin'];
        }

        return $this->success([
            'user' => $user,
            'token' => $user->createToken('API Token of ' . $user->name, $abilities)->plainTextToken
        ]);

    }

    public function register(StoreUserRequest $request)
    {
        $request->validated($request->all());

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone' => $request->phone
        ]);

        event(new Registered($user));

        $abilities = ['place-order', 'view-own-orders', 'update-profile'];

        return $this->success([
            'user' => $user,
            'token' => $user->createToken('API Token of ' . $user->name, $abilities)->plainTextToken
        ]);
        // return $this->success("", "Check your email for verification.");
    }

    public function logout(Request $request)
    {
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return $this->success('', '', 200);

    }
    public function user(Request $request)
    {
        return $request->user();

    }
    public function isAdmin(Request $request)
    {
        if ($request->user()->tokenCan('admin')) {
            return $this->success($request->user()->tokenCan('admin'));
        } else {
            return $this->error(null, 'Not Authorized');
        }

    }
}
