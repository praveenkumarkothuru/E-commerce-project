import React from "react";
import emailjs from "@emailjs/browser";

function SendOrderEmail({ cart, netAmount, tax, delivery, totalAmount, discount, customer }) {

  const handleSendEmail = () => {

    // FULL valid HTML table rows
    const itemsHtml = cart
      .map((item) => {
        const lineTotal = (item.price * item.quantity).toFixed(2);
        return `
          <tr style="border-bottom:1px solid #ddd;">
            <td style="padding:8px;">${item.name}</td>
            <td style="padding:8px; text-align:center;">${item.quantity}</td>
            <td style="padding:8px; text-align:right;">₹${item.price.toFixed(2)}</td>
            <td style="padding:8px; text-align:right;">₹${lineTotal}</td>
          </tr>
        `;
      })
      .join("");

    const templateParams = {
      company_name: "Your Company Name",
      customer_name: customer.name,
      email: customer.email,
      items_html: itemsHtml,   // MUST MATCH TEMPLATE
      net_amount: netAmount.toFixed(2),
      gst: tax.toFixed(2),
      delivery: delivery.toFixed(2),
      discount: discount.toFixed(2),
      total_amount: totalAmount.toFixed(2),
    };

    emailjs
      .send(
        "service_i5qaiaj",
        "template_s90t7qw",
        templateParams,
        "ZOG02iUKNrOHOhuhm"
      )
      .then(
        () => alert("Order Email Sent!"),
        (err) => alert("Email failed: " + err.text)
      );
  };

  return (
    <button onClick={handleSendEmail} className="send-btn">
      Send Order Email
    </button>
  );
}

export default SendOrderEmail;
