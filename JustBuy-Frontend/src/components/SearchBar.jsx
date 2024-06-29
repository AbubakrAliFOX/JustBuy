import React, { useContext } from "react";
import Button from "./Button";
import ProductContext, { ProductProvider } from "../contexts/ProductsProvider";

export default function SearchBar() {
  const { setSearch } = useContext(ProductContext);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <form className="flex justify-center w-full my-6" action="#">
      <input
        type="text"
        className="w-8/12 text-2xl py-3 px-3 rounded-lg"
        placeholder="Search for products"
        onChange={handleChange}
      />
      <Button onClick={(e) => alert(3234)} href="#">
        Search
      </Button>
    </form>
  );
}
