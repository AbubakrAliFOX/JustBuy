<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class StoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'min:2', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'phone' => ['required', 'string', 'size:10'],
            'password' => ['required', 'confirmed', 'min:6'],
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Name is required',
            'name.min' => 'Name is too short',
            'name.max' => 'Name is too Long!',
            'email.required' => 'Email is required',
            'email.email' => 'Invalid email',
            'phone.required' => 'Phone number is required',
            'phone.size' => 'Phone number should be 10 numbers',
            'password.required' => 'Password is required',
            'password.min' => 'Password must have at least 6 characters',
            'password.confirmed' => 'Passwords must match',
        ];
    }
}
