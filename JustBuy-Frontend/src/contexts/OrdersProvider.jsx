import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "./AuthProvider";

const url = import.meta.env.VITE_MAIN_URL;

const OrderContext = createContext();

export const OrdersProvider = ({ children }) => {
  const { token } = useAuthContext();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/orders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.data.orders);
        setOrders(response.data.data.orders);
      })
      .catch((err) => console.log(err));
  }, [orders]);

  return (
    <OrderContext.Provider value={{ orders }}>{children}</OrderContext.Provider>
  );
};

export default OrderContext;
