import items from "../src/data.json";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      name: "Range",
      description:
        "There's a range of cosmetics listed here, including mascara, eyeshadow palette, lipstick, and nail polish. Brands like Essence, Chanel, Dior, and Gucci are featured, offering various scents and makeup options.",
    },
    {
      name: "Return policy",
      description:
        "Return policies vary, from 7 days for some fragrances like Dior J'adore to 90 days for items like red lipstick and honey jar.",
    },
    {
      name: "Furniture",
      description:
        "Annibale Colombo seems to be a high-end furniture brand, offering items like beds, sofas, and bedside tables. The return policy for these items is generally around 7 days, indicating a higher level of confidence in their quality.",
    },
    {
      name: "Groceries",
      description:
        "From basic food items like beef steak, chicken meat, and eggs to fresh produce like cucumbers and kiwis, the list includes a variety of groceries.",
    },
  ];
  return (
    <div className="container mx-auto p-4">
      <div className="py-6 sm:py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Beautiful things
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need there
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              This store offers a diverse range of products, including the
              Essence Mascara Lash Princess, a highly acclaimed mascara
              celebrated for its volumizing and lengthening effects. Crafted
              with a cruelty-free formula, this mascara promises dramatic lashes
              that endure. Each application delivers a remarkable
              transformation, enhancing your natural beauty with its
              long-lasting formula.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature, index) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    {index + 1}
                  </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
