import ProductItem from "@/src/components/ProductItem";
import { fetchProducts } from "@/src/utils/getGoods";
import React from "react";

export default async function Goods() {
  const fetchData = await fetchProducts();
  const { data } = fetchData;
  const { products } = data;

  return (
    <div className="container mx-auto p-2 bg-white">
        <div className="mx-auto max-w-2xl px-4 py-2 sm:px-4 sm:py-4 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Goods
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))}
          </div>
      </div>
    </div>
  );
}
