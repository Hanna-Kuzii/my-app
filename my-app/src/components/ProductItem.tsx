"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductItem = ({ product }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/goods/${product.id}`);
  };
  return (
    <div
      key={product.id}
      className="group relative cursor-pointer"
      onClick={handleClick}
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Image
          src={product.images[0]}
          alt={product.imageAlt}
          width={100}
          height={100}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex flex-col">
        <div className="flex justify-between">
          <h3 className="text-sm text-gray-700">
            <a href={product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.title}
            </a>
          </h3>
          <p className="text-sm font-medium text-gray-900">${product.price}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2 ">
            <p className="text-sm text-gray-500">{product.rating}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="yellow"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p className="text-sm text-gray-500">{product.returnPolicy}</p>
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
