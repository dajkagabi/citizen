import React from "react";
import Card from "../CardCollection/CardCollection";
import imageCollection from "../../data";

const products = [
  {
    ...imageCollection[0],
    price: "$299",
    oldPrice: "$399",
    description:
      "Elegant Citizen watch with Japanese movement and sapphire glass.",
    features: {
      movement: "Japanese Quartz",
      glass: "Sapphire Crystal",
      caseMaterial: "Stainless Steel",
      waterResistance: "50m / 5 ATM",
      diameter: "40mm",
      thickness: "10mm",
      strap: "Genuine Leather",
      powerReserve: "Battery ~2 years",
      warranty: "2 years",
    },
  },
  {
    ...imageCollection[1],
    price: "$349",
    oldPrice: "$429",
    description:
      "Classic Citizen timepiece, stainless steel and water resistant.",
    features: {
      movement: "Eco-Drive Solar",
      glass: "Mineral Crystal",
      caseMaterial: "Titanium",
      waterResistance: "100m / 10 ATM",
      diameter: "42mm",
      thickness: "11mm",
      strap: "Stainless Steel Bracelet",
      powerReserve: "Up to 6 months on full charge",
      warranty: "3 years",
    },
  },
  {
    ...imageCollection[2],
    price: "$279",
    oldPrice: "$359",
    description:
      "Modern Citizen watch, Eco-Drive technology and timeless design.",
    features: {
      movement: "Eco-Drive Solar",
      glass: "Sapphire Crystal with AR",
      caseMaterial: "Brushed Stainless Steel",
      waterResistance: "100m / 10 ATM",
      diameter: "41mm",
      thickness: "10.5mm",
      strap: "Rubber / Nylon interchangeable",
      powerReserve: "Up to 8 months",
      warranty: "2 years international",
    },
  },
];

const Collection = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8 md:p-32">
    {products.map((product, idx) => (
      <Card
        key={idx}
        image={product.src}
        title={product.title}
        price={product.price}
        oldPrice={product.oldPrice}
        description={product.description}
        features={product.features}
        onAddToCart={() => alert(`Added ${product.title} to cart!`)}
        onBuyNow={() => alert(`Buying ${product.title} now!`)}
      />
    ))}
  </div>
);

export default Collection;
