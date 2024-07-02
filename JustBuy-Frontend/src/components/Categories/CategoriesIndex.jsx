import React from "react";
import PageTitle from "../PageTitle";
import CategoriesDisplay from "./CategoriesDisplay";

export default function CategoriesIndex() {
  return (
    <>
      <PageTitle>List of categories:</PageTitle>
      <CategoriesDisplay />
    </>
  );
}
