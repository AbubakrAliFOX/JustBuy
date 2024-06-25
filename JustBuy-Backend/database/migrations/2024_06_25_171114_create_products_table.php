<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use App\Models\Category;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->foreignIdFor(Category::class);
            $table->decimal('price');
            $table->float('discount_percentage');
            $table->integer('rating');
            $table->integer('stock');
            $table->string('brand')->nullable();
            $table->string('sku');
            $table->integer('weight');
            $table->string('shipping_information');
            $table->string('availability_status');
            $table->string('image_url');
            $table->string('thumbnail_url');
        });


    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');

    }
};
