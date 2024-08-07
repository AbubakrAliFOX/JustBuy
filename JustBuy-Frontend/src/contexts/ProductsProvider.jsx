import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "./AuthProvider";

const url = import.meta.env.VITE_MAIN_URL;

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const { token } = useAuthContext();

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState({
    searchTerm: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const refreshProducts = () => {
    axios
      .get(
        `${url}/products?q=${search.searchTerm}&min=${search.minPrice}&max=${search.maxPrice}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setProducts(response.data.data.products);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    refreshProducts(search);
  }, [search]);

  return (
    <ProductContext.Provider value={{ products, refreshProducts, setSearch }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
