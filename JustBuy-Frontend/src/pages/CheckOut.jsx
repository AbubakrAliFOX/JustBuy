import React, { useContext, useEffect, useState } from "react";
import CartContext from "../contexts/CartProvider";
import CheckOutItem from "../components/CheckOutItem";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const url = import.meta.env.VITE_MAIN_URL;

export default function CheckOut() {
  let totalPrice = 0;
  const natigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    console.log(cart);

    if (!(cart.length > 0)) {
      console.log("Hi");
      natigate("/buy");
    }
  }, [cart]);

  const handleSubmit = async () => {
    const response = await axios.post(`${url}/orders`, cart);
    console.log(response);
  };

  return (
    <main className="mt-8 w-8/12 mx-auto">
      <h1 className="text-xl mb-6">Order Summary:</h1>
      <section>
        {cart.map((el) => {
          totalPrice += el.price * el.qty;
          return <CheckOutItem setCart={setCart} data={el} />;
        })}
        <h2>
          Total amount:{" "}
          <span className="font-bold text-purple-700">
            USD {totalPrice.toFixed(2)}
          </span>
        </h2>
        <button
          className="py-3 my-4 w-80 block rounded-lg bg-purple-700 hover:opacity-80 text-white"
          href="#"
          type="submit"
          onClick={handleSubmit}
        >
          Order Now
        </button>
      </section>
    </main>
  );
}
