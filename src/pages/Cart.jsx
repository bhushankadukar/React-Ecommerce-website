import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/Cartcontext";
import { useContext } from "react";
import "./Cart.css";

export default function Cart() {
  const { state, dispatch } = useContext(CartContext);

  const navigate = useNavigate();

  const total = state.cart
    .reduce(
      (acc, item) => acc + Number(item.price),
      0
    )
    .toFixed(2);

  return (
    <div className="cart-page">

      <div className="cart-heading">
        <span>SHOPPING CART</span>
        <h1>Your Cart</h1>
      </div>

      {state.cart.length === 0 ? (

        <div className="empty-cart">

          <div className="empty-cart-icon">
            🛒
          </div>

          <h2>Your cart is empty</h2>

          <p>
            Looks like you haven't added anything yet.
          </p>

          <button onClick={() => navigate("/product")}>
            Start Shopping →
          </button>

        </div>

      ) : (

        <div className="cart-layout">

          <div className="cart-items">

            {state.cart.map((item) => (

              <div
                key={item.id}
                className="cart-item"
              >

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="cart-item-info">

                  <h3>{item.title}</h3>

                  <p>
                    ${Number(item.price).toFixed(2)}
                  </p>

                  <button
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: item.id,
                      })
                    }
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

          </div>

          <div className="cart-summary">

            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Items</span>
              <span>{state.cart.length}</span>
            </div>

            <div className="summary-row total">
              <span>Total</span>
              <strong>${total}</strong>
            </div>

            <button
              onClick={() => navigate("/payment")}
            >
              Proceed to Payment →
            </button>

          </div>

        </div>

      )}

    </div>
  );
}