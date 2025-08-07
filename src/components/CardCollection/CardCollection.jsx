import React from "react";

const Card = ({
  image,
  price,
  oldPrice,
  title,
  description,
  features,
  onAddToCart,
  onBuyNow,
}) => (
  <a
    href="#"
    className="group relative block overflow-hidden rounded-xl shadow-lg"
  >
    {/* Wishlist button */}
    <button
      className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
      aria-label="Wishlist"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    </button>

    <img
      src={image}
      alt={title}
      className="h-80 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
    />

    {/* Content */}
    <div className="relative border border-gray-100 bg-white p-6">
      <p className="text-gray-700">{price}</p>

      <h3 className="mt-1.5 text-lg font-medium text-gray-900">{title}</h3>

      <p className="mt-1.5 line-clamp-3 text-gray-700">{description}</p>

      {/* Watch Features */}
      {features && (
        <ul className="mt-4 space-y-1 text-sm text-gray-600">
          <li>
            <strong>Movement:</strong> {features.movement}
          </li>
          <li>
            <strong>Glass:</strong> {features.glass}
          </li>
          <li>
            <strong>Case:</strong> {features.caseMaterial}
          </li>
          <li>
            <strong>Water Resistance:</strong> {features.waterResistance}
          </li>
          <li>
            <strong>Diameter:</strong> {features.diameter}
          </li>
          <li>
            <strong>Thickness:</strong> {features.thickness}
          </li>
          <li>
            <strong>Strap:</strong> {features.strap}
          </li>
          <li>
            <strong>Weight:</strong> {features.weight}
          </li>
          <li>
            <strong>Power Reserve:</strong> {features.powerReserve}
          </li>
          <li>
            <strong>Warranty:</strong> {features.warranty}
          </li>
        </ul>
      )}

      {/* Buttons */}
      <form className="mt-4 flex gap-4">
        <button
          type="button"
          className="block w-full rounded-sm bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105"
          onClick={onAddToCart}
        >
          Add to Cart
        </button>
        <button
          type="button"
          className="block w-full rounded-sm bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
          onClick={onBuyNow}
        >
          Buy Now
        </button>
      </form>
    </div>
  </a>
);

export default Card;
