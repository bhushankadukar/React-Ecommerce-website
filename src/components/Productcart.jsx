import React, { useContext } from "react";
import { CartContext } from "../context/Cartcontext";
import "./Productcart.css";

function ProductCart({
  id,
  title,
  price,
  image,
}) {
  const { dispatch } = useContext(CartContext);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id,
        title,
        price,
        image,
      },
    });
  };

  return (
    <div className="product-card">

      <div className="product-image">
        <img
          src={image}
          alt={title}
        />
      </div>

      <h3>{title}</h3>

      <p className="product-price">
        ${Number(price).toFixed(2)}
      </p>

      <button onClick={addToCart}>
        🛒 Add to Cart
      </button>

    </div>
  );
}

export default React.memo(ProductCart);