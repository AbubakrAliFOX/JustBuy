import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthProvider";
import axios from "axios";
import Notify from "../components/Notify";
// import ProductContext from "./ProductsProvider";

const url = import.meta.env.VITE_MAIN_URL;

const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState();
  //   const { refreshProducts } = useContext(ProductContext);
  const { token } = useAuthContext();

  const refreshWishlist = () => {
    axios
      .get(`${url}/wishlist`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        console.log(data.data.wishlist);
        setWishlist(data.data.wishlist);
        // refreshProducts();
        // setWishlist(response.data.data.orders);
      })
      .catch(({ response }) => {
        console.log(response.data.message);
        // Notify(response.data.message, "error");
      });
  };

  const AddToWishlist = (product_id) => {
    axios
      .post(
        `${url}/wishlist`,
        { product_id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
        Notify(data.message, "success");
        // refreshProducts();
        // setWishlist(response.data.data.orders);
      })
      .catch(({ response }) => {
        console.log(response.data.message);
        Notify(response.data.message, "error");
      })
      .finally(() => {
        refreshWishlist();
      });
  };

  const DeleteFromWishlist = (product_id) => {
    axios
      .delete(`${url}/wishlist/${product_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        console.log(data);
        Notify(data.message, "success");
        // refreshProducts();
        // setWishlist(response.data.data.orders);
      })
      .catch(({ response }) => {
        console.log(response.data.message);
        Notify(response.data.message, "error");
      })
      .finally(() => {
        refreshWishlist();
      });
  };

  useEffect(() => {
    refreshWishlist();
  }, []);

  return (
    <WishlistContext.Provider
      value={{ wishlist, AddToWishlist, DeleteFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContext;
