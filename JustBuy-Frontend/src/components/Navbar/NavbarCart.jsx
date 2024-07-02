import React, { useContext } from "react";
import Cart from "../Cart/Cart";
import CartContext from "../../contexts/CartProvider";
import CartItem from "../Cart/CartItem";
import { Link } from "react-router-dom";

export default function NavbarCart() {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="relative group text-black">
      <Cart />
      <ul className="hidden absolute w-[300px] text-center left-1/2 transform -translate-x-1/2 z-10 bg-white rounded-lg group-hover:block group-focus:block">
        {cart.length > 0 ? (
          cart.map((el, idx) => (
            <CartItem
              key={(idx + 1) * 0.35}
              setCart={setCart}
              price={el.price}
              name={el.name}
              qty={el.qty}
            />
          ))
        ) : (
          <li>No Items In The Cart</li>
        )}
        {cart.length > 0 && (
          <Link
            className="py-3 w-full block rounded-lg bg-purple-700 hover:opacity-80 text-white"
            type="submit"
            to="/verified/checkout"
          >
            Checkout
          </Link>
        )}
      </ul>
    </div>
  );
}
