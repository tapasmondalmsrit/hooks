import React from "react";

function ProductItem({ product, onAddToCart }) {
  console.log(`Rendering ${product.name}`);
  return (
    <li>
      {product.name}
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </li>
  );
}

export default React.memo(ProductItem);
