import { useNavigate } from "react-router-dom";
import "./OrderSuccess.css";

export default function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="success-page">

      <div className="success-card">

        <div className="success-icon">
          ✓
        </div>

        <span>PAYMENT COMPLETED</span>

        <h1>
          Order Placed Successfully!
        </h1>

        <p>
          Thank you for shopping with ShopKart.
          Your order has been successfully placed.
        </p>

        <button onClick={() => navigate("/")}>
          Continue Shopping →
        </button>

      </div>

    </div>
  );
}