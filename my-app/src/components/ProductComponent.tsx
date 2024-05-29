"use client";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import Image from "next/image";
import classNames from "classnames";
import { useRouter } from "next/navigation";

export default function ProductComponnet({ product }) {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className="bg-white">
      <h2
        className="text-black p-5 w-min cursor-pointer text-2xl"
        onClick={handleBack}
      >
        Back
      </h2>

      <div className="mx-auto mt-2 w-2xl px-4 flex justify-between items-center container flex-col xl:flex-row lg:flex-row">
          <Image
            width={100}
            height={50}
            src={product.images[0]}
            alt={product.title}
            className="h-full w-full object-cover object-center"
          />

      <div className="max-w-2xl">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {product.title}
          </h1>
          <p className="text-3xl tracking-tight text-gray-900">
            ${product.price}
          </p>
        </div>
        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-8 lg:pr-8 lg:pt-6">
          <div>
            <h3 className="sr-only">Description</h3>
            <div className="space-y-6">
              <p className="text-base text-gray-900">{product.description}</p>
            </div>
          </div>
        </div>
        <div className="mt-4 my-3">
          <div className="flex items-center">
            <p className="text-3xl tracking-tight text-gray-900">
              {product.rating}{" "}
            </p>
            <StarIcon
              className={classNames(
                product.rating ? "text-gray-900" : "text-gray-200",
                "h-5 w-5 flex-shrink-0"
              )}
            />
          </div>
          <div className="mt-6 text-black">
            <h3>Reviews:</h3>
            <div className="flex flex-col">
              <ul className="flex flex-col">
                {product.reviews.map((review) => (
                  <li
                    key={review.comment}
                    className="flex items-center gap-5 justify-between"
                  >
                    <div className="flex gap-2">
                      <p>{review.comment}</p>

                      <div className="flex">
                        <p>{review.rating}</p> <StarIcon width={10} />
                      </div>
                    </div>
                    <p>By {review.reviewerName}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>

    </div>
  );
}
