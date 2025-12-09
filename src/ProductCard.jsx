import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./Store";
import "./ProductCard.css";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const [rating, setRating] = useState(product.rating || 0);
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    // Dispatch Redux action to add product every click
    dispatch(addToCart(product));

    // Show green popup message
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000); // hide after 2 seconds
  };

  const handleLike = () => setLiked(!liked);

  return (
    <div className="bb-card">
      {/* Heart Like */}
      <div className="bb-label">
        <span
          className="bb-heart"
          onClick={handleLike}
          style={{ color: liked ? "red" : "white", fontSize: "24px" }}
        >
          ♥
        </span>
      </div>

      {/* Product Image */}
     <img
  src={product.img && product.img.trim() !== "" ? product.img : null}
  alt={product.name || "Product"}
  className="product-img"
/>

      {/* Price */}
      <div className="bb-price-row">
        <span className="bb-price">₹{product.price}</span>
        <span className="bb-mrp">₹{product.mrp}</span>
      </div>
      <p className="bb-offer">{product.offer} 30% OFF</p>

      {/* Title */}
      <h3 className="bb-title">{product.name}</h3>
      <p className="bb-pack">{product.pack}</p>

      {/* Star Rating */}
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((s) => (
          <span
            key={s}
            onClick={() => setRating(s)}
            style={{ color: s <= rating ? "gold" : "gray", fontSize: "22px" }}
          >
            ★
          </span>
        ))}
      </div>

      {/* Add to Cart Button */}
      <div style={{ position: "relative", marginTop: "10px" }}>
        <button className="cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>

        {/* Green Popup */}
        {showMessage && (
          <div className="popup-message">Product added successfully!</div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
