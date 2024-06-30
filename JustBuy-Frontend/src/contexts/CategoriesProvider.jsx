import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "./AuthProvider";

const url = import.meta.env.VITE_MAIN_URL;

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const { token } = useAuthContext();

  const [categories, setCategories] = useState([]);

  const refreshCategories = () => {
    axios
      .get(`${url}/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setCategories(response.data.data.categories);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    refreshCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories, refreshCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContext;
