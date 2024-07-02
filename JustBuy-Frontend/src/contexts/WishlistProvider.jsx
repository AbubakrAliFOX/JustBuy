import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthProvider";
import axios from "axios";
import Notify from "../components/Notify";
// import ProductContext from "./ProductsProvider";

const url = import.meta.env.VITE_MAIN_URL;

const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const { token, isAdmin } = useAuthContext();

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

  const AdminWishlist = () => {
    axios
      .get(`${url}/wishlist/by-category`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        console.log(data.data.wishlistByCategory);
        setWishlist(data.data.wishlistByCategory);
      })
      .catch(({ response }) => {
        console.log(response.data.message);
        // Notify(response.data.message, "error");
      });
  };

  useEffect(() => {
    refreshWishlist();
    isAdmin && AdminWishlist();
  }, []);

  return (
    <WishlistContext.Provider
      value={{ wishlist, AddToWishlist, DeleteFromWishlist, AdminWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContext;
