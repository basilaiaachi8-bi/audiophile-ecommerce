import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartModal({ isOpen, onClose }) {
  const { cart, updateQuantity, clearCart, totalPrice, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-end md:justify-center items-start pt-28 px-6">
      <div className="bg-white w-full max-w-[377px] rounded-[8px] p-8 shadow-2xl relative">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-lg font-bold uppercase tracking-[1.3px]">
            Cart ({totalItems})
          </h2>
          {cart.length > 0 && (
            <button
              onClick={clearCart}
              className="text-black/50 hover:text-orange text-sm underline transition-colors"
            >
              Remove all
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          <p className="text-center text-black/50 py-8">კალათა ცარიელია</p>
        ) : (
          <div className="space-y-6 max-h-[250px] overflow-y-auto mb-8 pr-2">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image.desktop}
                    alt={item.name}
                    className="w-16 h-16 rounded-[8px] object-cover bg-dark-light"
                  />
                  <div>
                    <h4 className="font-bold text-base uppercase">
                      {item.shortName || item.name}
                    </h4>
                    <p className="text-black/50 font-bold text-sm">
                      $ {item.price.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="bg-dark-light flex items-center justify-between w-24 h-8 px-3">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="text-black/25 hover:text-orange font-bold"
                  >
                    -
                  </button>
                  <span className="text-xs font-bold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="text-black/25 hover:text-orange font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <>
            <div className="flex items-center justify-between mb-6">
              <span className="text-black/50 uppercase text-base">Total</span>
              <span className="text-lg font-bold">
                $ {totalPrice.toLocaleString()}
              </span>
            </div>

            <Link
              to="/checkout"
              onClick={onClose}
              className="w-full bg-orange hover:bg-orange-light text-white text-xs font-bold tracking-[1px] uppercase py-4 transition-colors block text-center"
            >
              Checkout
            </Link>
          </>
        )}

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black/50 hover:text-black font-bold"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
