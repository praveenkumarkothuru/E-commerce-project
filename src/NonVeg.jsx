import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./Style.css";
import { addToCart } from "./Store";
import ProductCard from "./ProductCard";

function NonVeg() {
  const dispatch = useDispatch();

  // 24 Base Non-Veg Items
  const baseItems = [
   
    { id: 1, name: "Fish Curry", price: 170, img: "https://t4.ftcdn.net/jpg/07/28/70/61/240_F_728706134_3IXohNEHAapHZCZlAdZuS2JoiFPxP86H.jpg" },
    { id: 2, name: "Mutton Fry", price: 300, img: "https://t3.ftcdn.net/jpg/07/30/64/02/240_F_730640299_Ej0JrlbncAZJc1MDEEvJagKvjTOI1PLy.jpg" },
    { id: 3, name: "Grilled Chicken", price: 240, img: "https://t3.ftcdn.net/jpg/15/74/81/02/240_F_1574810207_hTxm2IULH9LHWRnn39k9XLQM2ERlY7i5.jpg" },
    { id: 4, name: "Chicken Burger", price: 110, img: "https://t3.ftcdn.net/jpg/13/94/39/54/240_F_1394395424_lWzZoorqKIeqIoB0X0d3oOUVrBfkei5a.jpg" },
    { id: 5, name: "Chicken Wings", price: 160, img: "https://t4.ftcdn.net/jpg/07/97/79/91/240_F_797799113_XBDjBiRurZbzTL2HdNUIoImTrPDnJYG5.jpg" },
    { id: 6, name: "Fish Pakoda", price: 100, img: "https://t3.ftcdn.net/jpg/10/08/92/60/240_F_1008926056_Pl8JYbw166DDuH2uk0jHDcsg7kKWtOZl.jpg" },
    { id: 7, name: "Prawns Fry", price: 220, img: "https://t4.ftcdn.net/jpg/15/88/30/99/240_F_1588309951_gX06CDEEt1htDiXpnpyPT0EQmqNqEaaZ.jpg" },
    { id: 8, name: "Egg Fried Rice", price: 90, img: "https://t4.ftcdn.net/jpg/06/28/05/71/240_F_628057142_3H4Www7k6nhhxn9nJD7sieUmyUZdLLy0.jpg" },
    { id: 9, name: "Chicken Shawarma", price: 120, img: "https://t4.ftcdn.net/jpg/08/82/67/43/240_F_882674305_GaSfsWFBvg4c5J2yTRVBhyyAo6vz85Ha.jpg" },
    { id: 10, name: "Chicken Soup", price: 70, img: "https://t4.ftcdn.net/jpg/08/24/91/71/240_F_824917190_rfmzNyXz1kES6obVji2PxOXx5CLzQyfM.jpg" },
    { id: 11, name: "Fish Sandwich", price: 100, img: "fish-sandwich.jpg" },
    { id: 12, name: "Mutton Kebab", price: 180, img: "kebab.jpg" },
    { id: 13, name: "Mutton Fry", price: 300, img: "mutton-fry.jpg" },
    { id: 14, name: "Grilled Chicken", price: 240, img: "grill.jpg" },
    { id: 15, name: "Chicken Burger", price: 110, img: "burger.jpg" },
    { id: 16, name: "Chicken Wings", price: 160, img: "wings.jpg" },
    { id: 17, name: "Fish Pakoda", price: 100, img: "pakoda.jpg" },
    { id: 18, name: "Prawns Fry", price: 220, img: "prawns-fry.jpg" },
    { id: 19, name: "Egg Fried Rice", price: 90, img: "egg-friedrice.jpg" },
    { id: 20, name: "Chicken Shawarma", price: 120, img: "shawarma.jpg" },
    { id: 21, name: "Chicken Soup", price: 70, img: "soup.jpg" },
 
  ];
  // 16 More Extra Items → Total 40
  const extraItems = Array.from({ length: 16 }, (_, i) => ({
    id: 25 + i,
    name: `Non-Veg Special ${i + 1}`,
    price: Math.floor(Math.random() * 300) + 80,
    img: "nonveg.jpg",
  }));

  // Combine All NON-Veg Items
  const nonVegItems = [...baseItems, ...extraItems];

  // Pagination
  const itemsPerPage = 10;
  const [page, setPage] = useState(1);
  const start = (page - 1) * itemsPerPage;
  const pageItems = nonVegItems.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(nonVegItems.length / itemsPerPage);

  return (
    <div className="veg-container">

      <div style={{ padding: "40px 20px" }}></div>

      <h1 style={{ textAlign: "center", marginBottom: "25px" }}>
        🍗 NON-Veg Items
      </h1>

      {/* Cards */}
      <div className="card-grid">
        {pageItems.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button 
          onClick={() => setPage(page - 1)} 
          disabled={page === 1}
        >
          ⬅ Previous
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={page === i + 1 ? "active-page" : ""}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}

export default NonVeg;