import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
  clearCart,
  applyCoupon,
  setDiscount,
} from "./Store";

import "./Style.css";
import SendOrderEmail from "./SendOrderEmail";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const { discount, applied, message } = useSelector((state) => state.coupon || {});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Inputs
  const [couponInput, setCouponInput] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerName, setCustomerName] = useState("");

  // Location
  const [location, setLocation] = useState("");

  // ⭐ Get Current Location (Works 100%)
  const handleLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
        );

        const data = await res.json();

        const address =
          data.address?.city ||
          data.address?.town ||
          data.address?.village ||
          data.display_name;

        setLocation(address);
      },
      (err) => {
        alert("Location access blocked! Enable GPS.");
      }
    );
  };

  // Billing calculations
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discountAmount = applied ? (totalAmount * discount) / 100 : 0;
  const priceAfterDiscount = totalAmount - discountAmount;

  const gst = priceAfterDiscount * 0.18;
  const deliveryCharges = 50;
  const netAmount = priceAfterDiscount + gst + deliveryCharges;

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Cart</h1>

      {cart.length === 0 && <h3 className="empty">Cart is Empty</h3>}

      <div className="cart-container">
        {/* Cart Items */}
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-card">
              <img src={item.img} alt={item.name} className="cart-img" />

              <div className="cart-info">
                <h3>{item.name}</h3>
                <p className="price">₹ {item.price}</p>

                <div className="qty-box">
                  <button onClick={() => dispatch(decreaseQuantity(item))}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(addToCart(item))}>+</button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => dispatch(removeFromCart(item))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="billing-summary">
            <h2>Billing Summary</h2>

            {/* Coupon Box */}
            <div className="coupon-box">
              <input
                type="text"
                placeholder="Enter Coupon Code"
                className="coupon-input"
                value={couponInput}
                onChange={(e) => setCouponInput(e.target.value)}
              />
              <button className="apply-btn" onClick={() => dispatch(applyCoupon(couponInput))}>
                APPLY
              </button>
            </div>

            {message && (
              <p style={{ color: applied ? "green" : "red", fontWeight: "bold" }}>
                {message}
              </p>
            )}

            {/* Discount Buttons */}
            <div className="discount-buttons">
              <button className="green-btn" onClick={() => dispatch(setDiscount(10))}>
                10% OFF
              </button>
              <button className="green-btn" onClick={() => dispatch(setDiscount(20))}>
                20% OFF
              </button>
              <button className="green-btn" onClick={() => dispatch(setDiscount(30))}>
                30% OFF
              </button>
            </div>

            {/* Billing Details */}
            <div className="billing-details">
              <p>Total Amount: ₹{totalAmount.toFixed(2)}</p>
              <p>Discount ({discount}%): -₹{discountAmount.toFixed(2)}</p>
              <p>After Discount: ₹{priceAfterDiscount.toFixed(2)}</p>
              <p>GST (18%): ₹{gst.toFixed(2)}</p>
              <p>Delivery Charges: ₹{deliveryCharges.toFixed(2)}</p>
              <h3>Net Amount: ₹{netAmount.toFixed(2)}</h3>
            </div>

            {/* Customer Info */}
            <div className="email-section">
              <input
                type="text"
                placeholder="Enter your name"
                className="name-input"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="email-input"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
              />
            </div>

            {/* ⭐ LOCATION BUTTON WORKING ⭐ */}
           

            

            {/* Proceed to Payment */}
            <button
              onClick={() => navigate("/payment")}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                background: "green",
                color: "white",
                borderRadius: "8px",
                border: "none",
              }}
            >
              Proceed to Payment
            </button>

            {/* Email Sender */}
            <SendOrderEmail
              cart={cart}
              netAmount={netAmount}
              tax={gst}
              delivery={deliveryCharges}
              totalAmount={totalAmount}
              discount={discountAmount}
              customer={{
                name: customerName || "Customer",
                email: customerEmail || "",
              }}
            />

            {/* Clear Cart */}
            <button className="clear-btn" onClick={() => dispatch(clearCart())}>
              CLEAR CART
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
