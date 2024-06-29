<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Http\Requests\UpdateOrderRequest;
use App\Traits\HttpRequests;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    use HttpRequests;
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $request = $request->all();
            $totalPrice = 0;
            foreach ($request as $item) {
                $totalPrice += $item['price'] * $item['qty'];
            }

            $bal = $request[0];
            return $this->success(['order' => $totalPrice]);
        } catch (\Throwable $th) {
            return $this->error(null, $th->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        //
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
