import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

function Navbar() {
  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    alert("Logged out successfully");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <a href="/">
        <img src="/logo.png" alt="Store Logo" className="store-logo" />
      </a>

      <h2 className="store-name">GODAVARI RUCHULU</h2>

      <div className="nav-links">
        <Link to="/">🏠 Home</Link>
        <Link to="/veg">🥦 Veg</Link>
        <Link to="/nonveg">🍗 Non-Veg</Link>
        <Link to="/milk">🥛 Milk</Link>
        <Link to="/contact">📞 ContactUs</Link>
        <Link to="/aboutus">ℹ️ AboutUs</Link>
        <Link to="/cart">🛒 Cart ({totalItems})</Link>

        <button className="logout-btn" onClick={handleLogout}>
          Login
        </button>
        <button className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </button>
      </div>
    </nav>
  );
}

export default Navbar;
