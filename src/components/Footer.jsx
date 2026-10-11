import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-white relative">
      <div className="max-w-[1110px] mx-auto px-6 pb-12 pt-16 lg:pt-20 flex flex-col items-center lg:items-start relative">
        <div className="absolute top-0 left-6 lg:left-6 w-[101px] h-[4px] bg-orange"></div>

        <div className="w-full flex flex-col lg:flex-row items-center lg:justify-between mb-9 lg:mb-12">
          <Link
            to="/"
            className="text-2xl font-bold tracking-wide mb-8 lg:mb-0"
          >
            audiophile
          </Link>

          <nav className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-9 text-xs font-bold tracking-[2px] uppercase">
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
        </div>

        <div className="w-full flex flex-col lg:flex-row items-center lg:justify-between">
          <p className="text-white/50 text-sm leading-[25px] text-center lg:text-left max-w-[540px] mb-12 lg:mb-0">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>

          <div className="flex items-center space-x-4">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
                  fill="#FFF"
                />
              </svg>
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.17 0-5.738 2.584-5.738 5.775 0 .453.05.895.146 1.324A13.973 13.973 0 011.671 1.149a5.73 5.73 0 00-.777 2.9c0 2.002 1.01 3.765 2.549 4.802a4.882 4.882 0 01-2.228-.616v.074c0 2.8 1.993 5.136 4.637 5.663- invitado... 4.904-.622.74-.24 1.102-.451.278-.278.423-.628.513-.979a5.72 5.72 0 01-4.018 1.385 9.845 9.845 0 005.41 1.589c6.49 0 10.04-5.419 10.04-10.11v-.46A7.058 7.058 0 0024 2.557z"
                  fill="#FFF"
                />
              </svg>
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  fill="#FFF"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="w-full mt-12 lg:mt-14 text-white/50 text-sm font-bold text-center lg:text-left">
          Copyright 2021. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
