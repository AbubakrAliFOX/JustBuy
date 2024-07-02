<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Http\Requests\UpdateOrderRequest;
use App\Models\Product;
use App\Traits\HttpRequests;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class OrderController extends Controller
{
    use HttpRequests;
    public function index()
    {
        try {
            $user = Auth::user();
            if ($user->tokenCan('admin')) {
                $orders = Order::with([
                    'products' => function ($query) {
                        $query->select('products.id', 'products.name', 'products.price');
                    }
                ])
                    ->orderBy('date', 'desc')
                    ->get(['id', 'order_price', 'date', 'user_id']);
            } else {
                $orders = Order::where('user_id', $user->id)
                    ->with([
                        'products' => function ($query) {
                            $query->select('products.id', 'products.name', 'products.price');
                        }
                    ])
                    ->orderBy('date', 'desc')
                    ->get(['id', 'order_price', 'date', 'user_id']);
            }


            $formattedOrders = [];
            foreach ($orders as $order) {
                $formattedOrder = [
                    'total_price' => $order->order_price,
                    'user_id' => $order->user_id,
                    'date' => $order->date,
                    'products' => $order->products->map(function ($product) {
                        return [
                            'name' => $product->name,
                            'quantity' => $product->pivot->quantity,
                            'price' => $product->pivot->item_price,
                        ];
                    }),
                ];
                $formattedOrders[] = $formattedOrder;
            }
            return $this->success(['orders' => $formattedOrders]);
        } catch (\Throwable $th) {
            return $this->error(null, $th->getMessage());
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $user = Auth::user();

            $orderItems = $request->all();

            $totalPrice = 0;
            foreach ($orderItems as $item) {
                $totalPrice += $item['price'] * $item['qty'];
            }

            $order = Order::create(['user_id' => $user->id, 'date' => Carbon::now(), 'order_price' => $totalPrice]);

            foreach ($orderItems as $item) {
                $product = Product::where('name', $item['name'])->first();
                if ($product) {
                    $order->products()->attach($product->id, [
                        'quantity' => $item['qty'],
                        'item_price' => $item['price'],
                    ]);
                }
            }

            return $this->success(['order' => $order]);
        } catch (\Throwable $th) {
            return $this->error(null, $th->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrderRequest $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
    }
}
