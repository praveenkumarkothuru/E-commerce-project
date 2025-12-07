import React from "react";

function OrdersList() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Orders</h2>

      {orders.length === 0 && <p>No orders placed yet.</p>}

      {orders.map((order) => (
        <div
          key={order.id}
          style={{
            padding: "15px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <h3>Order ID: {order.id}</h3>
          <p>Date: {order.date}</p>
          <p>Total: ₹{order.amount}</p>
          <p>Payment Method: {order.paymentMethod}</p>

          <ul>
            {order.items.map((item) => (
              <li key={item.id}>
                {item.name} × {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default OrdersList;
