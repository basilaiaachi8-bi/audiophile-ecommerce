import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import CategorySection from "../components/CategorySection";

export default function Category() {
  const { categoryName } = useParams();
  const [sortBy, setSortBy] = useState("default");

  let filteredProducts = PRODUCTS.filter((p) => p.category === categoryName);

  if (sortBy === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "newest") {
    filteredProducts.sort((a, b) => (b.new === true) - (a.new === true));
  }

  return (
    <div>
      <div className="bg-dark text-white py-16 md:py-24 border-t border-white/10 text-center">
        <h1 className="text-[28px] md:text-[40px] font-bold uppercase tracking-[2px]">
          {categoryName}
        </h1>
      </div>

      <div className="max-w-[1110px] mx-auto px-6 pt-12 flex justify-end">
        <div className="flex items-center space-x-3">
          <span className="text-xs font-bold uppercase tracking-wider text-black/50">
            Sort by:
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-black/20 rounded-[8px] px-4 py-2 text-xs font-bold uppercase bg-white focus:outline-none focus:border-orange cursor-pointer"
          >
            <option value="default">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="newest">Newest First</option>
          </select>
        </div>
      </div>

      <section className="max-w-[1110px] mx-auto px-6 py-12 md:py-20 space-y-24 md:space-y-32">
        {filteredProducts.map((product, index) => (
          <div
            key={product.id}
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-[125px] ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full lg:w-1/2 bg-dark-light rounded-[8px] h-[352px] md:h-[560px] flex items-center justify-center p-8">
              <img
                src={product.image.desktop}
                alt={product.name}
                className="max-h-full object-contain"
              />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left max-w-[445px]">
              {product.new && (
                <span className="text-orange text-sm tracking-[10px] uppercase mb-4">
                  New Product
                </span>
              )}
              <h2 className="text-[28px] md:text-[40px] font-bold uppercase tracking-[1.5px] mb-6 leading-[1.1]">
                {product.name}
              </h2>
              <p className="text-black/50 text-base mb-10 leading-[25px]">
                {product.description}
              </p>
              <Link
                to={`/product/${product.slug}`}
                className="bg-orange hover:bg-orange-light text-white text-xs font-bold tracking-[1px] uppercase px-8 py-4 transition-colors inline-block"
              >
                See Product
              </Link>
            </div>
          </div>
        ))}
      </section>

      <CategorySection />

      <section className="max-w-[1110px] mx-auto px-6 mb-32 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-30">
        <div className="max-w-[445px] text-center lg:text-left">
          <h2 className="text-[28px] md:text-[40px] font-bold uppercase tracking-[1.5px] mb-8 leading-[1.1]">
            Bringing you the <span className="text-orange">best</span> audio
            gear
          </h2>
          <p className="text-black/50 text-base leading-[25px]">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories.
          </p>
        </div>
        <div className="w-full lg:w-[540px] h-[300px] md:h-[400px] rounded-[8px] overflow-hidden bg-[url('/assets/shared/desktop/image-best-gear.jpg')] bg-cover bg-center"></div>
      </section>
    </div>
  );
}
