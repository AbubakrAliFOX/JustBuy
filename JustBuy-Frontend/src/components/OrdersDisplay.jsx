import React, { useContext } from "react";
import OrderCard from "./OrderCard";
import OrderContext from "../contexts/OrdersProvider";

export default function OrdersDisplay() {
  const { orders } = useContext(OrderContext);

  return (
    <section className="px-6 py-8 h-screen w-6/12 mx-auto">
      <h1 className="font-bold text-xl">My Orders</h1>
      <section className="mx-3 mt-6">
        {orders.map((el, idx) => (
          <OrderCard data={el} key={idx} />
        ))}
      </section>
    </section>
  );
}
