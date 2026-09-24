import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/Cartcontext";
import { useContext } from "react";
import "./Payment.css";

export default function Payment() {
  const navigate = useNavigate();

  const { state, dispatch } = useContext(CartContext);

  const total = state.cart
    .reduce(
      (acc, item) => acc + Number(item.price),
      0
    )
    .toFixed(2);

  const handlePayment = () => {
    dispatch({
      type: "CLEAR_CART",
    });

    alert("Payment is successful");

    navigate("/success");
  };

  if (state.cart.length === 0) {
    return (
      <div className="payment-empty">
        <h2>No items to pay for</h2>

        <button onClick={() => navigate("/product")}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="payment-page">

      <div className="payment-card">

        <div className="payment-header">
          <span>SECURE CHECKOUT</span>

          <h1>Payment</h1>

          <p>
            Complete your purchase securely.
          </p>
        </div>

        <div className="payment-total">
          <span>Total Amount</span>

          <strong>
            ${total}
          </strong>
        </div>

        <div className="payment-form">

          <label>
            Card Number
            <input
              placeholder="1234 5678 9012 3456"
            />
          </label>

          <label>
            Card Holder Name
            <input
              placeholder="Enter card holder name"
            />
          </label>

          <div className="payment-row">

            <label>
              Expiry Date
              <input placeholder="MM/YY" />
            </label>

            <label>
              CVV
              <input
                type="password"
                placeholder="•••"
              />
            </label>

          </div>

          <button onClick={handlePayment}>
            Pay ${total}
          </button>

        </div>

        <div className="secure-text">
          🔒 Your payment information is secure
        </div>

      </div>

    </div>
  );
}