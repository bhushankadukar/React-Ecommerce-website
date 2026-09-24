import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "../context/ThemeContext";
import { CartContext } from "../context/Cartcontext";

import "./Navbar.css";

export default function Navbar() {
  const {
    state: themeState,
    dispatch: themeDispatch,
  } = useContext(ThemeContext);

  const { state: cartState } = useContext(CartContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo" onClick={closeMenu}>
        <span className="logo-icon">🛍️</span>
        Shop<span>Kart</span>
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/product" onClick={closeMenu}>
          Products
        </Link>

        <Link to="/login" onClick={closeMenu}>
          Login
        </Link>

        <Link to="/register" onClick={closeMenu}>
          Register
        </Link>

        <Link
          to="/cart"
          className="cart-link"
          onClick={closeMenu}
        >
          🛒 Cart
          <span className="cart-badge">
            {cartState.cart.length}
          </span>
        </Link>

        <button
          className="theme-toggle"
          onClick={() => {
            themeDispatch({
              type: "TOGGLE_THEME",
            });
            closeMenu();
          }}
        >
          {themeState.theme === "light" ? "🌙" : "☀️"}
        </button>
      </nav>
    </header>
  );
}