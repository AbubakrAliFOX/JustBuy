<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $guarded = [];
    public $timestamps = false;

    public function products()
    {
        return $this->belongsToMany(Product::class, 'product_order')->withPivot('quantity', 'item_price');

    }

}
