import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart, totalPrice, shipping, vat, grandTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isOrderFinished, setIsOrderFinished] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.includes("@"))
      newErrors.email = "Valid email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.zip.trim()) newErrors.zip = "ZIP code is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsOrderFinished(true);
    }
  };

  return (
    <div className="bg-dark-light py-16 px-6 relative">
      <div className="max-w-[1110px] mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="text-black/50 hover:text-orange transition-colors text-base font-medium mb-10"
        >
          Go Back
        </button>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:flex-row gap-[30px]"
        >
          <div className="bg-white rounded-[8px] p-8 md:p-12 lg:w-7/12">
            <h1 className="text-[28px] md:text-[32px] font-bold uppercase tracking-[1px] mb-10">
              Checkout
            </h1>

            {/* Billing Details */}
            <div className="mb-10">
              <h3 className="text-orange text-xs font-bold tracking-[1px] uppercase mb-4">
                Billing Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-xs font-bold">Name</label>
                    {errors.name && (
                      <span className="text-red-500 text-xs">
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Alexei Ward"
                    className={`w-full border rounded-[8px] px-4 py-3 text-sm focus:outline-none ${errors.name ? "border-red-500" : "border-black/20 focus:border-orange"}`}
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-xs font-bold">Email Address</label>
                    {errors.email && (
                      <span className="text-red-500 text-xs">
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alexei@mail.com"
                    className={`w-full border rounded-[8px] px-4 py-3 text-sm focus:outline-none ${errors.email ? "border-red-500" : "border-black/20 focus:border-orange"}`}
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-xs font-bold">Phone Number</label>
                    {errors.phone && (
                      <span className="text-red-500 text-xs">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 202-555-0136"
                    className={`w-full border rounded-[8px] px-4 py-3 text-sm focus:outline-none ${errors.phone ? "border-red-500" : "border-black/20 focus:border-orange"}`}
                  />
                </div>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="mb-10">
              <h3 className="text-orange text-xs font-bold tracking-[1px] uppercase mb-4">
                Shipping Info
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-xs font-bold">Your Address</label>
                    {errors.address && (
                      <span className="text-red-500 text-xs">
                        {errors.address}
                      </span>
                    )}
                  </div>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="1137 Williams Avenue"
                    className={`w-full border rounded-[8px] px-4 py-3 text-sm focus:outline-none ${errors.address ? "border-red-500" : "border-black/20 focus:border-orange"}`}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-xs font-bold">ZIP Code</label>
                      {errors.zip && (
                        <span className="text-red-500 text-xs">
                          {errors.zip}
                        </span>
                      )}
                    </div>
                    <input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleChange}
                      placeholder="10001"
                      className={`w-full border rounded-[8px] px-4 py-3 text-sm focus:outline-none ${errors.zip ? "border-red-500" : "border-black/20 focus:border-orange"}`}
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-xs font-bold">City</label>
                      {errors.city && (
                        <span className="text-red-500 text-xs">
                          {errors.city}
                        </span>
                      )}
                    </div>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="New York"
                      className={`w-full border rounded-[8px] px-4 py-3 text-sm focus:outline-none ${errors.city ? "border-red-500" : "border-black/20 focus:border-orange"}`}
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-xs font-bold">Country</label>
                      {errors.country && (
                        <span className="text-red-500 text-xs">
                          {errors.country}
                        </span>
                      )}
                    </div>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="United States"
                      className={`w-full border rounded-[8px] px-4 py-3 text-sm focus:outline-none ${errors.country ? "border-red-500" : "border-black/20 focus:border-orange"}`}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div>
              <h3 className="text-orange text-xs font-bold tracking-[1px] uppercase mb-4">
                Payment Details
              </h3>
              <div className="flex flex-col md:flex-row gap-6">
                <span className="text-xs font-bold w-1/3">Payment Method</span>
                <div className="w-full md:w-2/3 space-y-4">
                  <div className="border border-orange rounded-[8px] p-4 flex items-center space-x-4 cursor-pointer">
                    <input
                      type="radio"
                      checked
                      readOnly
                      className="accent-orange"
                    />
                    <span className="text-sm font-bold">e-Money</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-white rounded-[8px] p-8 lg:w-5/12 h-fit">
            <h2 className="text-lg font-bold uppercase tracking-[1.3px] mb-8">
              Summary
            </h2>

            {cart.length === 0 ? (
              <p className="text-center text-black/50 py-6">კალათა ცარიელია</p>
            ) : (
              <div className="space-y-6 mb-8">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between"
                  >
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
                    <span className="text-black/50 font-bold text-base">
                      x{item.quantity}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-3 mb-8 text-base">
              <div className="flex justify-between">
                <span className="text-black/50 uppercase">Total</span>
                <span className="font-bold">
                  $ {totalPrice.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-black/50 uppercase">Shipping</span>
                <span className="font-bold">$ {shipping}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black/50 uppercase">VAT (Included)</span>
                <span className="font-bold">$ {vat.toLocaleString()}</span>
              </div>
              <div className="flex justify-between pt-4">
                <span className="text-black/50 uppercase">Grand Total</span>
                <span className="font-bold text-orange">
                  $ {grandTotal.toLocaleString()}
                </span>
              </div>
            </div>

            <button
              type="submit"
              disabled={cart.length === 0}
              className="w-full bg-orange hover:bg-orange-light disabled:opacity-50 text-white text-xs font-bold tracking-[1px] uppercase py-4 transition-colors"
            >
              Continue & Pay
            </button>
          </div>
        </form>
      </div>

      {isOrderFinished && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-[8px] p-8 md:p-12 max-w-[540px] w-full">
            <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center text-white text-2xl font-bold mb-8">
              ✓
            </div>
            <h2 className="text-[24px] md:text-[32px] font-bold uppercase tracking-[1px] mb-4 leading-[1.1]">
              Thank you <br />
              for your order
            </h2>
            <p className="text-black/50 text-base mb-8">
              You will receive an email confirmation shortly.
            </p>
            <Link
              to="/"
              onClick={clearCart}
              className="w-full bg-orange hover:bg-orange-light text-white text-xs font-bold tracking-[1px] uppercase py-4 transition-colors block text-center"
            >
              Back to Home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
