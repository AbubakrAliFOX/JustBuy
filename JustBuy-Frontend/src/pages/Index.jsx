import React, { useContext } from "react";
import ProductContext from "../contexts/ProductsProvider";
import ProductCard from "../components/ProductCard";

export default function Index() {
  const { products } = useContext(ProductContext);
  return (
    <main className="p-8 w-full overflow-x-hidden">
      <h1 className="text-xl mb-6">Our Products:</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {products.map((el) => (
          <ProductCard key={el.id} data={el} />
        ))}
      </section>
    </main>
  );
}
