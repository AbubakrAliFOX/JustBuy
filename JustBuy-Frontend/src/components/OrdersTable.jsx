import React, { useContext } from "react";
import OrderContext from "../contexts/OrdersProvider";
import OrderCard from "./OrderCard";

export default function OrdersTable() {
  const { orders } = useContext(OrderContext);

  return orders.length > 0 ? (
    orders.map((el, idx) => <OrderCard data={el} key={idx} />)
  ) : (
    <h1>No orders yet!</h1>
  );
}
