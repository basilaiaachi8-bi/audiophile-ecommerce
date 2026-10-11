import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import { useCart } from "../context/CartContext";
import CategorySection from "../components/CategorySection";

export default function ProductDetail() {
  const { productSlug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = PRODUCTS.find((p) => p.slug === productSlug);

  if (!product) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-2xl font-bold mb-4">პროდუქტი ვერ მოიძებნა</h2>
        <button
          onClick={() => navigate(-1)}
          className="text-orange underline font-bold"
        >
          უკან დაბრუნება
        </button>
      </div>
    );
  }

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div>
      <div className="max-w-[1110px] mx-auto px-6 pt-20">
        <button
          onClick={() => navigate(-1)}
          className="text-black/50 hover:text-orange transition-colors text-base font-medium mb-14"
        >
          Go Back
        </button>

        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-[125px] mb-24 lg:mb-32">
          <div className="w-full md:w-1/2 bg-dark-light rounded-[8px] h-[352px] md:h-[560px] flex items-center justify-center p-8">
            <img
              src={product.image.desktop}
              alt={product.name}
              className="max-h-full object-contain"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-start max-w-[445px]">
            {product.new && (
              <span className="text-orange text-sm tracking-[10px] uppercase mb-4">
                New Product
              </span>
            )}
            <h1 className="text-[28px] md:text-[40px] font-bold uppercase tracking-[1.5px] mb-6 leading-[1.1]">
              {product.name}
            </h1>
            <p className="text-black/50 text-base mb-8 leading-[25px]">
              {product.description}
            </p>
            <div className="text-lg font-bold tracking-[1.3px] mb-8">
              $ {product.price.toLocaleString()}
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-dark-light flex items-center justify-between w-[120px] h-12 px-4">
                <button
                  onClick={handleDecrement}
                  className="text-black/25 hover:text-orange font-bold transition-colors"
                >
                  -
                </button>
                <span className="text-xs font-bold">{quantity}</span>
                <button
                  onClick={handleIncrement}
                  className="text-black/25 hover:text-orange font-bold transition-colors"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => addToCart(product, quantity)}
                className="bg-orange hover:bg-orange-light text-white text-xs font-bold tracking-[1px] uppercase px-8 h-12 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-24 lg:gap-[125px] mb-24 lg:mb-32">
          <div className="w-full lg:w-7/12">
            <h2 className="text-2xl md:text-[32px] font-bold uppercase tracking-[1.15px] mb-8">
              Features
            </h2>
            <div className="text-black/50 text-base leading-[25px] whitespace-pre-line">
              {product.features}
            </div>
          </div>

          <div className="w-full lg:w-5/12 flex flex-col md:flex-row lg:flex-col justify-between">
            <h2 className="text-2xl md:text-[32px] font-bold uppercase tracking-[1.15px] mb-8">
              In the Box
            </h2>
            <ul className="space-y-3">
              {product.includes.map((inc, index) => (
                <li key={index} className="flex items-center space-x-6">
                  <span className="text-orange font-bold text-sm">
                    {inc.quantity}x
                  </span>
                  <span className="text-black/50 text-base">{inc.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mb-24 lg:mb-32">
          <div className="flex flex-col gap-5 md:gap-8">
            <div className="h-[174px] md:h-[280px] rounded-[8px] overflow-hidden">
              <img
                src={product.gallery.first.desktop}
                alt="Gallery 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[174px] md:h-[280px] rounded-[8px] overflow-hidden">
              <img
                src={product.gallery.second.desktop}
                alt="Gallery 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="h-[368px] md:h-[592px] rounded-[8px] overflow-hidden">
            <img
              src={product.gallery.third.desktop}
              alt="Gallery 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mb-24 lg:mb-32 text-center">
          <h2 className="text-2xl md:text-[32px] font-bold uppercase tracking-[1.15px] mb-16">
            You may also like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.others.map((other, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-full bg-dark-light rounded-[8px] h-[318px] flex items-center justify-center p-6 mb-8">
                  <img
                    src={other.image.desktop}
                    alt={other.name}
                    className="max-h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-[1.5px] mb-8">
                  {other.name}
                </h3>
                <Link
                  to={`/product/${other.slug}`}
                  className="bg-orange hover:bg-orange-light text-white text-xs font-bold tracking-[1px] uppercase px-8 py-4 transition-colors inline-block"
                >
                  See Product
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

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
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products.
          </p>
        </div>
        <div className="w-full lg:w-[540px] h-[300px] md:h-[400px] rounded-[8px] overflow-hidden bg-[url('/assets/shared/desktop/image-best-gear.jpg')] bg-cover bg-center"></div>
      </section>
    </div>
  );
}
