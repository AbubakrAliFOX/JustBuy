<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subcategory extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'category_id'];
    public $timestamps = false;

    public function products()
    {
        return $this->belongsToMany(Product::class, 'product_subcategory');
    }
}
