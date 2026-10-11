import React from "react";
import { Link } from "react-router-dom";

export default function CategorySection() {
  const categories = [
    {
      name: "HEADPHONES",
      image: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
      link: "/category/headphones",
    },
    {
      name: "SPEAKERS",
      image: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
      link: "/category/speakers",
    },
    {
      name: "EARPHONES",
      image: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
      link: "/category/earphones",
    },
  ];

  return (
    <section className="max-w-[1110px] mx-auto px-6 pt-24 pb-20 lg:pt-32 lg:pb-28">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[30px]">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-dark-light rounded-[8px] pt-22 pb-8 px-6 flex flex-col items-center relative mt-16 group cursor-pointer"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="absolute -top-16 w-[140px] md:w-[120px] lg:w-[160px] object-contain group-hover:-translate-y-2 transition-transform duration-300"
            />

            <h3 className="text-lg font-bold tracking-[1px] uppercase mb-4 mt-6 text-dark">
              {cat.name}
            </h3>

            <Link
              to={cat.link}
              className="flex items-center space-x-3 text-[13px] font-bold tracking-[1px] uppercase text-black/50 group-hover:text-orange transition-colors"
            >
              <span>Shop</span>
              <svg width="7" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1l5 5-5 5"
                  stroke="#D87D4A"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
