import React from "react";
import PageTitle from "../components/PageTitle";
import SearchBar from "../components/SearchBar";
import ProductsDisplay from "../components/ProductsDisplay";

export default function Products() {
  return (
    <>
      <PageTitle>List of products:</PageTitle>
      <SearchBar />
      <ProductsDisplay />
    </>
  );
}
