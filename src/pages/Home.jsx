import React from "react";
import { Link } from "react-router-dom";
import CategorySection from "../components/CategorySection";

export default function Home() {
  return (
    <div>
      <section className="bg-dark text-white relative overflow-hidden border-t border-white/10">
        <div className="max-w-[1110px] mx-auto px-6 h-[600px] lg:h-[630px] flex flex-col lg:flex-row items-center justify-center lg:justify-between text-center lg:text-left relative z-10">
          <div className="max-w-[396px] flex flex-col items-center lg:items-start z-20">
            <span className="text-white/50 text-sm tracking-[10px] uppercase mb-4">
              New Product
            </span>
            <h1 className="text-3xl md:text-[56px] font-bold uppercase leading-[1.1] tracking-[2px] mb-6">
              XX99 Mark II Headphones
            </h1>
            <p className="text-white/75 text-base mb-10 leading-[25px]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link
              to="/product/xx99-mark-two-headphones"
              className="bg-orange hover:bg-orange-light text-white text-xs font-bold tracking-[1px] uppercase px-8 py-4 transition-colors inline-block"
            >
              See Product
            </Link>
          </div>

          <div className="absolute lg:relative inset-0 lg:inset-auto flex items-center justify-center opacity-30 lg:opacity-100 pointer-events-none lg:pointer-events-auto">
            <img
              src="/assets/home/desktop/image-hero.jpg"
              alt="Hero Headphones"
              className="w-full lg:w-[700px] object-contain"
            />
          </div>
        </div>
      </section>

      <CategorySection />

      <section className="max-w-[1110px] mx-auto px-6 mb-24 lg:mb-32 space-y-12 lg:space-y-12">
        <div className="bg-orange rounded-[8px] text-white p-8 md:p-16 lg:p-24 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden bg-[url('/assets/home/desktop/pattern-circle.svg')] bg-no-repeat bg-cover">
          <div className="w-full lg:w-[410px] mb-12 lg:mb-0 flex justify-center">
            <img
              src="/assets/home/desktop/image-speaker-zx9.png"
              alt="ZX9 Speaker"
              className="w-[172px] md:w-[197px] lg:w-[410px] object-contain"
            />
          </div>
          <div className="max-w-[349px] text-center lg:text-left flex flex-col items-center lg:items-start">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-[1.5px] mb-6">
              ZX9 Speaker
            </h2>
            <p className="text-white/75 text-base mb-10 leading-[25px]">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link
              to="/product/zx9-speaker"
              className="bg-dark hover:bg-[#4C4C4C] text-white text-xs font-bold tracking-[1px] uppercase px-8 py-4 transition-colors inline-block"
            >
              See Product
            </Link>
          </div>
        </div>

        <div className="relative rounded-[8px] overflow-hidden bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')] bg-cover bg-center h-[320px] flex items-center px-6 md:px-16">
          <div className="z-10">
            <h2 className="text-2xl font-bold uppercase tracking-[2px] mb-8 text-dark">
              ZX7 Speaker
            </h2>
            <Link
              to="/product/zx7-speaker"
              className="border border-black hover:bg-black hover:text-white text-black text-xs font-bold tracking-[1px] uppercase px-8 py-4 transition-colors inline-block"
            >
              See Product
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-[30px]">
          <div className="rounded-[8px] overflow-hidden bg-[url('/assets/home/desktop/image-earphones-yx1.jpg')] bg-cover bg-center h-[200px] md:h-[320px]"></div>
          <div className="bg-dark-light rounded-[8px] p-10 md:p-16 lg:p-24 flex flex-col justify-center">
            <h2 className="text-2xl font-bold uppercase tracking-[2px] mb-8 text-dark">
              YX1 Earphones
            </h2>
            <div>
              <Link
                to="/product/yx1-earphones"
                className="border border-black hover:bg-black hover:text-white text-black text-xs font-bold tracking-[1px] uppercase px-8 py-4 transition-colors inline-block"
              >
                See Product
              </Link>
            </div>
          </div>
        </div>
      </section>

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
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="w-full lg:w-[540px] h-[300px] md:h-[400px] rounded-[8px] overflow-hidden bg-[url('/assets/shared/desktop/image-best-gear.jpg')] bg-cover bg-center"></div>
      </section>
    </div>
  );
}
