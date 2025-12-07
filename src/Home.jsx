import React from "react";
import "./Home.css";
import Footer from "./Footer";

function Home() {

  const cards = [
    {
      title: "veg",
      text: "We are open 24/7 for you",
      img: "https://t3.ftcdn.net/jpg/15/55/41/58/240_F_1555415800_EP5NAeqLrPu2OieyzRuTRFLnOcZs3qi6.jpg"
    },
    {
      title: "Non-veg",
      text: "Fresh products delivered to your doorstep",
      img: "https://t4.ftcdn.net/jpg/07/28/70/61/240_F_728706134_3IXohNEHAapHZCZlAdZuS2JoiFPxP86H.jpg"
    },
    {
      title: "Milk-Shacks",
      text: "Get your items delivered within 10 minutes",
      img: "https://t4.ftcdn.net/jpg/04/48/66/07/240_F_448660772_PoLhjRPqvxgpfEiJ4JrozJnNa1AWBAIT.jpg"
    }
  ];

  return (
    <div className="home-page">
      
      {/* HERO SECTION WITH IMAGE */}
      <div className="home-container">
        <h1 className="home-title">Welcome to Our Store</h1>

        <div className="search-row">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-btn">Search</button>
        </div>
      </div>

      <a
  href="/location"
  style={{
    padding: "10px 20px",
    background: "#007bff",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none"
  }}
>
  Set Delivery Location
</a>


      {/* SCROLL DOWN → 3 CARDS SECTION */}
      <div className="cards-wrapper">
        <h2 className="cards-heading">How It Works</h2>

        <div className="cards-section">
          {cards.map((card, index) => (
            <div key={index} className="card">
              <img src={card.img} alt={card.title} className="card-img" />
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
<Footer />
    </div>
  );
}

export default Home;
