import React from "react";
import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>🎉 Order Successful!</h1>
      <p>Your payment was received.</p>

      <Link to="/orders">
        <button style={{ marginTop: "20px", padding: "10px 20px" }}>
          View My Orders
        </button>
      </Link>
    </div>
  );
}

export default OrderSuccess;
