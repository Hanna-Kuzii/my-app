import ProductComponnet from "@/src/components/ProductComponent";
import ProductItem from "@/src/components/ProductItem";
import { fetchProductById } from "@/src/utils/getGoodById";
import { fetchProducts } from "@/src/utils/getGoods";
import React from "react";

export default async function Good({ params }: { params: { id: string } }) {
  const fetchData = await fetchProductById(params.id);
  const { data } = fetchData;

  return (
    <div className="container mx-auto p-2 bg-white">
      <ProductComponnet product={data} />
    </div>
  );
}
