import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const url = import.meta.env.VITE_MAIN_URL;

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState({
    searchTerm: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const refreshProducts = () => {
    // let completeUrl = search.searchTerm
    //   ? `${url}/products?q=${search.searchTerm}`
    //   : `${url}/products`;
    axios
      .get(
        `${url}/products?q=${search.searchTerm}&min=${search.minPrice}&max=${search.maxPrice}`,
        {
          headers: {
            Authorization: `Bearer `,
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
