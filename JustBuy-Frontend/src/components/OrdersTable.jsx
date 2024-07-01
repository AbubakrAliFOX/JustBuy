import React, { useContext } from "react";
import OrderContext from "../contexts/OrdersProvider";
import OrderCard from "./OrderCard";

export default function OrdersTable() {
  const { orders } = useContext(OrderContext);

  return orders.map((el, idx) => <OrderCard data={el} key={idx} />);
}
