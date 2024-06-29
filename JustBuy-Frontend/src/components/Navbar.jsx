import React, { useContext } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import Button from "./Button";
import Cart from "./Cart";
import CartContext from "../contexts/CartProvider";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { user, token } = useStateContext();
  const { cart, setCart } = useContext(CartContext);

  const logOut = (e) => {
    e.preventDefault();
  };
  return (
    <nav className="bg-stone-100 h-20 px-6 text-white text-center flex justify-between items-center">
      <div>
        <h1 className="text-black font-bold text-2xl">
          {token ? `User: ${user.name}` : "JustBuy.com"}
        </h1>
      </div>
      {token ? (
        <div className="flex justify-start gap-2">
          <Button href="/settings">Settings</Button>
          <Button type="delete" href="/logout">
            Logout
          </Button>
        </div>
      ) : (
        <div className="flex justify-start gap-2">
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
                  to="/checkout"
                >
                  Checkout
                </Link>
              )}
            </ul>
          </div>
          <Button href="/settings">Login</Button>
          <Button href="/logout">Signup</Button>
        </div>
      )}
    </nav>
  );
}
