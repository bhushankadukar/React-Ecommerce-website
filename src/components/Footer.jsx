import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">

          <h2>
            🛍️ Shop<span>Kart</span>
          </h2>

          <p>
            Your simple destination for quality products,
            great prices and a better shopping experience.
          </p>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/product">Products</Link>
          <Link to="/cart">Cart</Link>

        </div>

        <div className="footer-links">

          <h3>Account</h3>

          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>

        </div>

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>📧 support@shopkart.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 Mumbai, India</p>

        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 ShopKart. All rights reserved.
        </p>

        <p>
          Made with ❤️ using React
        </p>
      </div>

    </footer>
  );
}

export default Footer;