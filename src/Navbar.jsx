import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // menu open/close
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

      {/* LOGO + NAME */}
      <div className="left-section">
        <a href="/" className="logo-link">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5okrguhcAKUejcxad7Imhs-h7urh_uV_Ufw&s"
            alt="Store Logo"
            className="store-logo"
          />
        </a>
        <h2 className="store-name">GODAVARI RUCHULU</h2>
      </div>

      {/* NAV LINKS */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/">🏠 Home</Link>
        <Link to="/veg">🥦 Veg</Link>
        <Link to="/nonveg">🍗 Non-Veg</Link>
        <Link to="/milk">🥛 MilkShakes</Link>
        <Link to="/contact">📞 ContactUs</Link>
        <Link to="/aboutus">ℹ️ AboutUs</Link>
        <Link to="/cart">🛒 Cart ({totalItems})</Link>
        <Link to="/orders">Order</Link>
        

        <button className="logout-btn" onClick={handleLogout}>
          Login
        </button>
      </div>

      {/* HAMBURGER MENU BUTTON */}
      <button 
        className="hamburger" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </nav>
  );
}

export default Navbar;
