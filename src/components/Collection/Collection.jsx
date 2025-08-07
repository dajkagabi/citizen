import React from "react";
import Card from "../CardCollection/CardCollection";
import imageCollection from "../../data";

const products = [
  {
    ...imageCollection[0],
    price: "$299",

    features: {
      movement: "Automatic",
      glass: "Sapphire ",
      caseMaterial: "Stainless Steel",
      waterResistance: "50m / 5 ATM",
      diameter: "40mm",
      thickness: "10mm",
      strap: "Stainless steel",
      weight: "138 g",
      powerReserve: "40 hours",
      warranty: "2 years",
    },
  },
  {
    ...imageCollection[1],
    price: "$349",

    features: {
      movement: "Automatic",
      glass: "Sapphire ",
      caseMaterial: "Stainless Steel",
      waterResistance: "50m / 5 ATM",
      diameter: "40mm",
      thickness: "10mm",
      strap: "Stainless steel",
      weight: "138 g",
      powerReserve: "40 hours",
      warranty: "2 years",
    },
  },
  {
    ...imageCollection[2],
    price: "$279",

    features: {
      movement: "Automatic",
      glass: "Sapphire ",
      caseMaterial: "Stainless Steel",
      waterResistance: "50m / 5 ATM",
      diameter: "40mm",
      thickness: "10mm",
      strap: "Stainless steel",
      weight: "138 g",
      powerReserve: "40 hours",
      warranty: "2 years",
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
        description={product.description}
        features={product.features}
        onAddToCart={() => alert(`Added ${product.title} to cart!`)}
        onBuyNow={() => alert(`Buying ${product.title} now!`)}
      />
    ))}
  </div>
);

export default Collection;
