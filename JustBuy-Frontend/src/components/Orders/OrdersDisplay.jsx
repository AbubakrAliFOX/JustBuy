import React from "react";
import OrdersTable from "./OrdersTable";

export default function OrdersDisplay() {
  return (
    <section className="px-6 py-8 h-screen w-6/12 mx-auto">
      <h1 className="font-bold text-xl">My Orders</h1>
      <section className="mx-3 mt-6">
        <OrdersTable />
      </section>
    </section>
  );
}
