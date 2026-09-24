// import React from "react";
// import { Link } from "react-router-dom";
// import "./Home.css";

// function Home() {
//   return (
//     <div className="home">

//       {/* Hero */}
//       <section className="hero-section">

//         <div className="hero-content">

//           <span className="hero-tag">
//             ✨ New Collection Available
//           </span>

//           <h1>
//             Shop Smart.
//             <br />
//             <span>Live Better.</span>
//           </h1>

//           <p>
//             Discover amazing products at great prices.
//             Everything you need, delivered right to your doorstep.
//           </p>

//           <div className="hero-buttons">
//             <Link to="/product" className="primary-btn">
//               Shop Now →
//             </Link>

//             <Link to="/register" className="secondary-btn">
//               Create Account
//             </Link>
//           </div>

//           <div className="hero-stats">
//             <div>
//               <strong>100+</strong>
//               <span>Products</span>
//             </div>

//             <div>
//               <strong>24/7</strong>
//               <span>Support</span>
//             </div>

//             <div>
//               <strong>100%</strong>
//               <span>Secure</span>
//             </div>
//           </div>

//         </div>

//         <div className="hero-image-wrapper">
//           <div className="hero-circle"></div>

//           {/* <img
//             src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=900&q=80"
//             alt="Shopping"
//           /> */}

//           <div className="floating-card">
//             <span>🔥</span>
//             <div>
//               <strong>Best Deals</strong>
//               <small>Everyday</small>
//             </div>
//           </div>

//         </div>

//       </section>


//       {/* Features */}

//       <section className="features-section">

//         <div className="section-heading">
//           <span>WHY SHOP WITH US</span>
//           <h2>Everything You Need</h2>
//           <p>
//             We make online shopping simple, safe and enjoyable.
//           </p>
//         </div>

//         <div className="features">

//           <div className="feature-card">
//             <div className="feature-icon">🚚</div>
//             <h3>Fast Delivery</h3>
//             <p>
//               Get your products delivered quickly and safely.
//             </p>
//           </div>

//           <div className="feature-card">
//             <div className="feature-icon">🔒</div>
//             <h3>Secure Payment</h3>
//             <p>
//               Your payment information stays protected.
//             </p>
//           </div>

//           <div className="feature-card">
//             <div className="feature-icon">💰</div>
//             <h3>Best Prices</h3>
//             <p>
//               Enjoy great products at affordable prices.
//             </p>
//           </div>

//           <div className="feature-card">
//             <div className="feature-icon">⭐</div>
//             <h3>Quality Products</h3>
//             <p>
//               Carefully selected products for you.
//             </p>
//           </div>

//         </div>

//       </section>


//       {/* Categories */}

//       <section className="categories-section">

//         <div className="section-heading">
//           <span>EXPLORE</span>
//           <h2>Shop By Category</h2>
//         </div>

//         <div className="categories">

//           <Link to="/product" className="category-card">
//             <span>📱</span>
//             <h3>Electronics</h3>
//             <p>Smart gadgets & devices</p>
//           </Link>

//           <Link to="/product" className="category-card">
//             <span>👕</span>
//             <h3>Fashion</h3>
//             <p>Trendy clothes & accessories</p>
//           </Link>

//           <Link to="/product" className="category-card">
//             <span>⌚</span>
//             <h3>Watches</h3>
//             <p>Style for every occasion</p>
//           </Link>

//           <Link to="/product" className="category-card">
//             <span>🎧</span>
//             <h3>Accessories</h3>
//             <p>Everyday essentials</p>
//           </Link>

//         </div>

//       </section>


//       {/* CTA */}

//       <section className="cta-section">

//         <div>
//           <span>READY TO SHOP?</span>

//           <h2>
//             Find Something
//             <br />
//             You'll Love.
//           </h2>

//           <p>
//             Explore our products and discover your next favorite item.
//           </p>

//           <Link to="/product" className="cta-btn">
//             Explore Products →
//           </Link>
//         </div>

//       </section>

//     </div>
//   );
// }

// export default Home;

import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">
            ✨ Welcome to Snapkart
          </span>

          <h1>
            Shop Smart.
            <br />
            Live Better.
          </h1>

          <p>
            Discover amazing products at great prices.
            From electronics to fashion, everything you
            need is just one click away.
          </p>

          <div className="hero-buttons">
            <Link to="/product" className="primary-btn">
              Shop Now →
            </Link>

            <Link to="/register" className="secondary-btn">
              Create Account
            </Link>
          </div>

          <div className="hero-stats">
            <div>
              <strong>500+</strong>
              <span>Products</span>
            </div>

            <div>
              <strong>10K+</strong>
              <span>Customers</span>
            </div>

            <div>
              <strong>4.8★</strong>
              <span>Rating</span>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-circle">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80"
              alt="Shopping"
            />
          </div>

          <div className="floating-card delivery-card">
            🚚
            <div>
              <strong>Fast Delivery</strong>
              <span>On selected orders</span>
            </div>
          </div>

          <div className="floating-card offer-card">
            🔥
            <div>
              <strong>Best Deals</strong>
              <span>Every single day</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature">
          <div className="feature-icon">🚚</div>
          <div>
            <h3>Fast Delivery</h3>
            <p>Quick and reliable delivery</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">🔒</div>
          <div>
            <h3>Secure Payment</h3>
            <p>Your payment is protected</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">💰</div>
          <div>
            <h3>Best Prices</h3>
            <p>Great products, better prices</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">⭐</div>
          <div>
            <h3>Quality Products</h3>
            <p>Products you can trust</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <div className="section-heading">
          <span>EXPLORE</span>
          <h2>Shop by Category</h2>
          <p>
            Find everything you need in one place.
          </p>
        </div>

        <div className="category-grid">

          <Link to="/product" className="category-card electronics">
            <div className="category-icon">💻</div>
            <h3>Electronics</h3>
            <p>Latest gadgets & devices</p>
            <span>Explore →</span>
          </Link>

          <Link to="/product" className="category-card fashion">
            <div className="category-icon">👕</div>
            <h3>Fashion</h3>
            <p>Style for every occasion</p>
            <span>Explore →</span>
          </Link>

          <Link to="/product" className="category-card watches">
            <div className="category-icon">⌚</div>
            <h3>Watches</h3>
            <p>Classic & modern designs</p>
            <span>Explore →</span>
          </Link>

          <Link to="/product" className="category-card accessories">
            <div className="category-icon">🎧</div>
            <h3>Accessories</h3>
            <p>Complete your lifestyle</p>
            <span>Explore →</span>
          </Link>

        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div>
          <span>READY TO SHOP?</span>

          <h2>
            Your next favorite
            <br />
            product is waiting.
          </h2>

          <p>
            Browse our collection and discover
            something you'll love.
          </p>

          <Link to="/product" className="cta-button">
            Start Shopping →
          </Link>
        </div>

        <div className="cta-emoji">
          🛍️
        </div>
      </section>

    </div>
  );
}