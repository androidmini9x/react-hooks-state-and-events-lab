import React, {useState} from "react";

function Item({ name, category }) {

  const [cart, setCart] = useState(false);

  const cartAdded = cart === false ? "" : "in-cart";

  function addToCart() {
    setCart(() => !cart);
  }

  return (
    <li className={cartAdded}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
