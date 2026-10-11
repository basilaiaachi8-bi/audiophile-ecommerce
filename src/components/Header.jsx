import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartModal from "./CartModal";
import { PRODUCTS } from "../data/products";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const filteredProducts =
    searchQuery.trim() === ""
      ? []
      : PRODUCTS.filter((p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()),
        );

  const handleSelectProduct = (slug) => {
    navigate(`/product/${slug}`);
    setSearchQuery("");
    setIsSearchOpen(false);
  };

  return (
    <>
      <header className="bg-dark text-white border-b border-white/14 relative z-50">
        <div className="max-w-[1110px] mx-auto px-6 h-24 flex items-center justify-between">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden focus:outline-none"
          >
            <svg width="20" height="15" xmlns="http://www.w3.org/2000/svg">
              <g fill="#FFF" fillRule="evenodd">
                <path d="M0 0h20v3H0zM0 6h20v3H0zM0 12h20v3H0z" />
              </g>
            </svg>
          </button>

          <Link to="/" className="text-2xl font-bold tracking-wide">
            audiophile
          </Link>

          <nav className="hidden lg:flex items-center space-x-8 text-xs font-bold tracking-[2px] uppercase">
            <Link to="/" className="hover:text-orange transition-colors">
              Home
            </Link>
            <Link
              to="/category/headphones"
              className="hover:text-orange transition-colors"
            >
              Headphones
            </Link>
            <Link
              to="/category/speakers"
              className="hover:text-orange transition-colors"
            >
              Speakers
            </Link>
            <Link
              to="/category/earphones"
              className="hover:text-orange transition-colors"
            >
              Earphones
            </Link>
          </nav>

          <div className="flex items-center space-x-6">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchOpen(true)}
                className="bg-white/10 text-white text-xs rounded-full px-4 py-2 pl-9 focus:outline-none focus:ring-1 focus:ring-orange w-44 transition-all"
              />
              <svg
                className="absolute left-3 top-2.5 w-3.5 h-3.5 text-white/50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>

              {isSearchOpen && filteredProducts.length > 0 && (
                <div className="absolute top-full mt-2 w-64 bg-white text-black rounded-[8px] shadow-xl py-2 z-50 right-0">
                  {filteredProducts.map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => handleSelectProduct(prod.slug)}
                      className="px-4 py-2 hover:bg-dark-light cursor-pointer text-xs font-bold uppercase transition-colors"
                    >
                      {prod.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setIsCartOpen(true)}
              className="focus:outline-none relative hover:opacity-80 transition-opacity"
            >
              <svg width="23" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.625 15.833a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm6 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM.833.833A.833.833 0 000 1.667v.833a.833.833 0 00.833.833h1.378l2.155 7.545a2.5 2.5 0 002.41 1.787h7.228a2.5 2.5 0 002.41-1.787l1.62-5.672a.833.833 0 00-.8-1.039H4.492L3.89 1.565A1.25 1.25 0 002.73 0H.833zM6.282 9.167L5.347 5.833h12.595l-1.373 4.808a.833.833 0 01-.803.595H7.458a.833.833 0 01-.804-.595z"
                  fill="#FFF"
                  fillRule="nonzero"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white text-black py-12 px-6 rounded-b-lg shadow-2xl transition-all z-50">
            <div className="flex flex-col space-y-6">
              <Link
                to="/category/headphones"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-center font-bold tracking-wider uppercase text-lg"
              >
                Headphones
              </Link>
              <Link
                to="/category/speakers"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-center font-bold tracking-wider uppercase text-lg"
              >
                Speakers
              </Link>
              <Link
                to="/category/earphones"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-center font-bold tracking-wider uppercase text-lg"
              >
                Earphones
              </Link>
            </div>
          </div>
        )}
      </header>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
