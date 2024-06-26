import React from "react";
import Button from "./Button";

export default function SearchBar() {
  return (
    <form className="mx-auto w-10/12 my-6" action="#">
      <input
        type="text"
        className="w-8/12 text-2xl py-3 px-1"
        placeholder="Search for products"
      />
      <Button onClick={(e) => alert(3234)} href="#">
        Search
      </Button>
    </form>
  );
}
