import React, { useCallback, useState, useMemo } from "react";
import ProductItem from "./ProductItem";
import Cart from "./Cart";
const productList = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Tablet" },
  // ... potentially hundreds of products
];
const ProductList = () => {
  const [filter, setFilter] = useState("");
  const [cart, setCart] = useState([]);

  const filteredProducts = useMemo(
    () =>
      productList.filter((product) =>
        product.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [filter]
  );
  console.log("filteredProducts", filteredProducts);

  const addToCart = useCallback((item) => {
    setCart((prevCart) => [...prevCart, item]);
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </ul>
      <h2>Cart</h2>
      <ul>
        {cart.map((product, index) => (
          <Cart key={index} product={product} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
