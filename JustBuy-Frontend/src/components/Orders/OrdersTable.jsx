import React, { useContext } from "react";
import OrderContext from "../../contexts/OrdersProvider";
import OrderCard from "./OrderCard";
import { useAuthContext } from "../../contexts/AuthProvider";

export default function OrdersTable() {
  const { isAdmin } = useAuthContext();
  let { orders } = useContext(OrderContext);

  return orders.length > 0 ? (
    orders.map((el, idx) => <OrderCard isAdmin={isAdmin} data={el} key={idx} />)
  ) : (
    <h1>No orders yet!</h1>
  );
}
