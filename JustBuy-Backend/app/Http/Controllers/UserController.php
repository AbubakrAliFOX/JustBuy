<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return UserResource::collection(
            User::query()->orderBy('id', 'desc')->paginate(10)
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            // 'name' => ['required','string',''],
        ]);
        $data['password'] = bcrypt($data['password']);
        $user = User::create($data);

        return response(new UserResource($user), 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data = $request->validate([
            // 'name' => ['required','string',''],
        ]);
        //password logic start
        if (isset($data['password'])) {
            $data['password'] = bcrypt($data['password']);
        }
        //password logic end
        $user = User::update($data);

        return response(new UserResource($user), 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user->delete();

        return response("", 204);
    }
}
