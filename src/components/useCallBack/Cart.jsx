import React from "react";

const Cart = ({ index, product }) => {
  console.log(`Rendering cart ${product.name}`);
  return <li key={index}>{product.name}</li>;
};

export default React.memo(Cart);
