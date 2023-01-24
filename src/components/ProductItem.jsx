import React, { useState } from "react";
import "@styles/ProductItem.scss";

import AddToCart from "@icons/bt_add_to_cart.svg";
const ProductItem = ({ product }) => {
  const [cart, setCart] = useState([]);

  const handelClick = () => {
    setCart();
  };
  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={handelClick}>
          <img src={AddToCart} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
