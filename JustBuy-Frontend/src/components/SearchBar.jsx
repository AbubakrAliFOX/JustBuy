import React, { useContext } from "react";
import Button from "./Button";
import ProductContext, { ProductProvider } from "../contexts/ProductsProvider";

export default function SearchBar() {
  const { setSearch } = useContext(ProductContext);
  const handleChange = (e) => {
    setSearch((prev) => {
      return { ...prev, searchTerm: e.target.value };
    });
  };

  const handlePrice = (e) => {
    if (e.target.id == "min") {
      setSearch((prev) => {
        return { ...prev, minPrice: e.target.value };
      });
    }

    if (e.target.id == "max") {
      setSearch((prev) => {
        return { ...prev, maxPrice: e.target.value };
      });
    }
  };
  return (
    <section className="flex flex-col justify-center w-full my-6">
      <input
        type="text"
        className="w-8/12 text-2xl py-3 px-3 rounded-lg border-2 border-black"
        placeholder="Search for products"
        onChange={handleChange}
      />
      <div className="mt-2">
        <input
          className="rounded-lg border-2 text-center border-black mr-2 w-20 h-10"
          type="number"
          name="min"
          id="min"
          onChange={handlePrice}
        />
        <label>
          <span className="font-bold text-2xl">{"<"}</span>{" "}
          <span className="text-xl">Price</span>{" "}
          <span className="font-bold text-2xl">{"<"}</span>
        </label>
        <input
          className="rounded-lg border-2 text-center border-black ml-3 w-20 h-10"
          type="number"
          name="max"
          id="max"
          onChange={handlePrice}
        />
      </div>
    </section>
  );
}
