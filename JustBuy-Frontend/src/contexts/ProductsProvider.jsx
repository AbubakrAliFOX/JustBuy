import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const url = import.meta.env.VITE_MAIN_URL;

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const refreshProducts = () => {
    axios
      .get(`${url}/products`, {
        headers: {
          Authorization: `Bearer `,
        },
      })
      .then((response) => {
        setProducts(response.data.data.products);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    refreshProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, refreshProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
