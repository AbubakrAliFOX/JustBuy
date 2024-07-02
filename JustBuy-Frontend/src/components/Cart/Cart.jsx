import React, { useContext } from "react";
import CartContext from "../../contexts/CartProvider";

export default function Cart({}) {
  const { cart } = useContext(CartContext);
  return (
    <div className="flex relative items-center cursor-pointer">
      <div>
        <img
          className="w-20 h-10"
          src="https://www.svgrepo.com/show/533042/cart-plus.svg"
          alt="Cart"
        />
      </div>
      <p className="text-white bg-purple-700 rounded-full text-center text-lg font-bold h-[29px] w-[29px] absolute inline right-0 -bottom-[5px]">
        {cart.length}
      </p>
    </div>
  );
}
