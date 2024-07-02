import React from "react";
import PageTitle from "../PageTitle";
import ProductsDisplay from "./ProductsDisplay";

export default function ProductsIndex() {
  return (
    <>
      <PageTitle>List of products:</PageTitle>
      <ProductsDisplay />
    </>
  );
}
