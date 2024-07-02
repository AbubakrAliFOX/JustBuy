<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $guarded = [];
    public $timestamps = false;


    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function subcategories()
    {
        return $this->belongsToMany(Subcategory::class, 'product_subcategory');
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'wishlists')->withTimestamps();
    }

    public function wishlists()
    {
        return $this->belongsToMany(User::class, 'wishlists', 'product_id', 'user_id');
    }

}
