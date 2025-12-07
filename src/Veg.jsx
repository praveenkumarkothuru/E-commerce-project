
import { useDispatch } from "react-redux";

import React, { useState } from "react";

import "./Style.css";
import ProductCard from "./ProductCard";
import { addToCart } from "./Store";


function Veg() {
  const dispatch = useDispatch();

  
  const baseItems = [
    { id: 1, name: "Veg Biryani", price: 150, img: "https://t4.ftcdn.net/jpg/07/17/85/21/240_F_717852126_3SR8z9AbelCo2qPv8eAzh7iYQGSpd2r4.jpg" },
    { id: 2, name: "Aloo Gobi", price: 120, img: "https://t4.ftcdn.net/jpg/05/94/78/03/240_F_594780372_YAiTwrwbZ6K6FEJgAH1bNhz43Aqb7gsN.jpg" },
    { id: 3, name: "veg rice", price: 200, img: "https://t3.ftcdn.net/jpg/06/79/32/62/240_F_679326226_CRJhluLFEwuCYIevWIdMGdXUAtKwiLa6.jpg" },
    { id: 4, name: "vegtables biryani", price: 100, img: "https://t3.ftcdn.net/jpg/09/61/30/24/240_F_961302423_0edVnPpggPwaOW176cFtEubFtQIoXGuz.jpg" },
    { id: 5, name: "veg fried Rice", price: 80, img: "https://t4.ftcdn.net/jpg/06/28/05/71/240_F_628057142_3H4Www7k6nhhxn9nJD7sieUmyUZdLLy0.jpg" },
    { id: 6, name: "Veg Pulao", price: 130, img: "https://t4.ftcdn.net/jpg/09/15/22/99/240_F_915229943_26yFoAIdElR5Q1cf5quZK04jzFWMcbr9.jpg" },
    { id: 7, name: "CholeBhature biryani ", price: 140, img: "https://t3.ftcdn.net/jpg/11/04/08/80/240_F_1104088052_svX52HVFKxOfzeUJTGTaEWdy7ONR78lp.jpg" },
    { id: 8, name: "Aloo Paratha", price: 100, img: "https://t4.ftcdn.net/jpg/08/48/31/85/240_F_848318590_37Tly3HsZBFwNjqFPTVJJRzr1PU6JYIl.jpg" },
    { id: 9, name: "Veg Manchurian", price: 160, img: "https://t4.ftcdn.net/jpg/10/24/78/31/240_F_1024783101_Ev135Rko55F47T82yW9vhFbg2c8JIrnG.jpg" },
    { id: 10, name: "Masala Dosa", price: 90, img: "https://t3.ftcdn.net/jpg/07/81/63/98/240_F_781639851_Ei9cGEnywZFCFa3wVDh5An5GQrT9f4F1.jpg" },
    { id: 11, name: "Paneer Butter Masala", price: 250, img: "https://www.freepik.com/free-ai-image/delicious-meal-table_72554352.htm#fromView=search&page=1&position=5&uuid=e1eeb486-0f32-4df0-988c-68cf91d07dc9&query=Paneer+Butter+Masala" },
    { id: 12, name: "Curd Rice", price: 60, img: "curd.jpg" },
    { id: 13, name: "Mixed Veg Curry", price: 130, img: "mixveg.jpg" },
    { id: 14, name: "Veg Sandwich", price: 90, img: "sandwich.jpg" },
    { id: 15, name: "Vegetable Soup", price: 50, img: "soup.jpg" },
    { id: 16, name: "Paneer Roll", price: 100, img: "roll.jpg" },
    { id: 17, name: "Veg Cutlet", price: 60, img: "cutlet.jpg" },
    { id: 18, name: "Corn Fried Rice", price: 70, img: "corn.jpg" },
    { id: 19, name: "Gobi Curry", price: 120, img: "gobi.jpg" },
    { id: 20, name: "Kaju Curry", price: 260, img: "kaju.jpg" },
    { id: 21, name: "Chana Curry", price: 150, img: "chana.jpg" },
    { id: 22, name: "Veg Korma", price: 160, img: "korma.jpg" },
    { id: 23, name: "Masala Rice", price: 50, img: "masala-rice.jpg" },
    { id: 24, name: "Tomato Rice", price: 50, img: "tomato-rice.jpg" },
  ];

    

 const extraItems = Array.from({ length: 16 }, (_, i) => ({
    id: 25 + i,
    name: `Veg Special ${i + 1}`,
    price: Math.floor(Math.random() * 200) + 50,
    img: "veg.jpg",
  }));

  // All veg items
  const vegItems = [...baseItems, ...extraItems];

  // Pagination
  const itemsPerPage = 10;
  const [page, setPage] = useState(1);
  const start = (page - 1) * itemsPerPage;
  const pageItems = vegItems.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(vegItems.length / itemsPerPage);

  return (
    <div className="veg-container">

      <div style={{ padding: "40px 20px" }}></div>
      <h1 style={{ textAlign: "center", marginBottom: "25px" }}>
        🥗 Veg Items
      </h1>

      {/* Product Cards */}
      <div className="card-grid">
  {pageItems.map((item) => (
    <ProductCard key={item.id} product={item} />
  ))}
        
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
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

export default Veg;
