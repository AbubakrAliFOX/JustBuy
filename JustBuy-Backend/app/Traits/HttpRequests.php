<?php

namespace App\Traits;

trait HttpRequests
{
    protected function success($data, $message = null, $code = 200)
    {
        return response()->json([
            'status' => 'Request was successful',
            'message' => $message,
            'data' => $data
        ], $code);
    }

    protected function error($data = null, $message = null, $code = 400)
    {
        return response()->json([
            'status' => 'Error has occured!',
            'message' => $message,
            'data' => $data
        ], $code);
    }
}
