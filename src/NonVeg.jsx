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
    { id: 11, name: "Fish Sandwich", price: 100, img: "https://media.istockphoto.com/id/600996592/photo/beer-battered-fish-sandwich-on-a-ciabatta-bun.jpg?s=612x612&w=0&k=20&c=8fX-KcIGfLBvyZMj8VZk-7pgPcQYoKW4x7rRkP3ahZw=" },
    { id: 12, name: "Mutton Kebab", price: 180, img: "https://media.istockphoto.com/id/1153901024/photo/variety-of-chicken-kababs.jpg?s=612x612&w=0&k=20&c=gSYDkXqjMc8HRntMRvoCP-kFLyMPXBB2776qP1KqoJg=" },
    { id: 13, name: "Mutton Fry", price: 300, img: "https://media.istockphoto.com/id/1093395034/photo/grilled-new-zealand-lamb-chops-plated-with-sauteed-brussel-sprouts.jpg?s=612x612&w=0&k=20&c=wx4SesfrNfobcZlSuiJTWGNTZYo6E7eIsOQJsvp0Rm8=" },
    { id: 14, name: "Grilled Chicken", price: 240, img: "https://media.istockphoto.com/id/1217611897/photo/grilled-chicken-breasts-with-thyme-garlic-and-lemon-slices-on-a-grill-pan-close-up.jpg?s=612x612&w=0&k=20&c=iobxGp_U-v45kgcR1Uv4QVhlkVFpUjsozJQQ6_tF1wY=" },
    { id: 15, name: "Chicken Burger", price: 110, img: "https://t3.ftcdn.net/jpg/02/19/46/78/240_F_219467809_GYKTUDodRRk1o64ZltOURhzfvEYLk6zq.jpg" },
    { id: 16, name: "Chicken Wings", price: 160, img: "https://t4.ftcdn.net/jpg/06/31/45/29/240_F_631452978_47w56kIRXxj3rUNYQiMELq6m4RJ9d9O0.jpg" },
    { id: 17, name: "Fish Pakoda", price: 100, img: "https://t4.ftcdn.net/jpg/06/75/17/71/240_F_675177188_nkkcx4RQL1rSxr0odebEv2hpVcPxvnDp.jpg" },
    { id: 18, name: "Prawns Fry", price: 220, img: "https://t4.ftcdn.net/jpg/09/75/54/07/240_F_975540718_o5DQqf0y0OcaxTsMfF5gFarzG8VvR8Za.jpg" },
    { id: 19, name: "Egg Fried Rice", price: 90, img: "https://t4.ftcdn.net/jpg/06/28/05/71/240_F_628057142_3H4Www7k6nhhxn9nJD7sieUmyUZdLLy0.jpg" },
    { id: 20, name: "Chicken Shawarma", price: 120, img: "https://t3.ftcdn.net/jpg/07/62/92/58/240_F_762925825_W39uYUlDROch4pmLVok9Qubghc7hLUVu.jpg" },
    { id: 21, name: "Chicken Soup", price: 70, img: "https://t4.ftcdn.net/jpg/15/62/72/71/240_F_1562727159_Om2TDV88riSicnNk8t49lDcmzBbPDxwy.jpg" },
     { id: 22, name: "NonVeg Korma", price: 160, img: "https://t4.ftcdn.net/jpg/18/12/13/07/240_F_1812130718_jaDkAZLD1ER6q46rK5y8kUkUTaMgxVrA.jpg" },
    { id: 23, name: "Masala Rice", price: 50, img: "https://t4.ftcdn.net/jpg/07/12/26/43/240_F_712264314_qRKkZHBF0ypR6ZTD8nkBLcZfbKkJYP0H.jpg" },
    { id: 24, name: "Tomato Rice", price: 50, img: "https://t3.ftcdn.net/jpg/08/12/92/04/240_F_812920407_6l0R7EjQPWR8lHgGyablpEKmgaFtZA9s.jpg" },
     { id: 25, name: "Chicken 65", price: 150, img:"https://t3.ftcdn.net/jpg/17/71/98/70/240_F_1771987035_FdgkWBBE9nm4Y7Zv6rvCYMWiioci390F.jpg"},
     { id: 26, name: "Mutton Fry", price: 150, img:"https://t3.ftcdn.net/jpg/08/50/07/16/240_F_850071646_ONy1s3S2evoYEGeVyhwf1ObE76ihriqz.jpg"},
     { id: 27, name: "Prawn Manchurian", price: 150, img:"https://t3.ftcdn.net/jpg/09/27/35/22/240_F_927352210_gQKnMnKWQ7NdEM4eel5vnNoaAWoWds60.jpg"},
     { id: 28, name: "Egg Biryani", price: 150, img:"https://t3.ftcdn.net/jpg/16/40/34/22/240_F_1640342280_XxLIQ9fDeHUxz1YNJwZg2TJJop2AGu89.jpg"},
      { id: 29, name: "Egg Bhurji", price: 150, img:"https://t3.ftcdn.net/jpg/10/24/78/16/240_F_1024781666_Z3zBkVZI8hNDJ8YvHRkVeH6eeUSmPnl2.jpg"},,
     { id: 30, name: "Egg Curry", price: 150, img:"https://t4.ftcdn.net/jpg/16/00/50/81/240_F_1600508137_meEHRhV4WaN2QufNeUZUfWb14zKWWHVb.jpg"},
     { id: 31, name: "Fish Biryani", price: 150, img:"https://t4.ftcdn.net/jpg/18/12/12/99/240_F_1812129946_xnEIShOdAmls4u54XQpHWZ89ZUsSVn3C.jpg"},
     { id: 32, name: "Prawns Biryani", price: 150, img:"https://t4.ftcdn.net/jpg/15/97/99/91/240_F_1597999192_fuhDsQI6livIVHpPv7MwbkFs6ipogWuO.jpg"},  
      { id: 33, name: "Mutton Keema", price: 150, img:"https://t4.ftcdn.net/jpg/06/84/60/13/240_F_684601324_4n6i7R92IuhvOtgLTQzH1Sw0m5b8qQtN.jpg"},
     { id: 34, name: "Mutton Korma", price: 150, img:"https://t4.ftcdn.net/jpg/06/84/60/13/240_F_684601324_4n6i7R92IuhvOtgLTQzH1Sw0m5b8qQtN.jpg"},
     { id: 35, name: "Chicken Tandoori", price: 150, img:"https://t3.ftcdn.net/jpg/06/34/46/16/240_F_634461641_Gp3B9RPLylazpLqSQXHfelAYYQB0saTa.jpg"},
     { id: 36, name: "Chicken Fry", price: 150, img:"https://t4.ftcdn.net/jpg/05/77/63/91/240_F_577639194_DJPHJxxhggSgNzJuG3eZsHMBH6NamxCk.jpg"},
      { id: 37, name: "Butter Chicken", price: 150, img:"https://t3.ftcdn.net/jpg/06/01/41/66/240_F_601416673_Tn9dqtXuujNiavuJnNNspgcDezsStYpD.jpg"},
     { id: 38, name: "Mutton Chops", price: 150, img:"https://t4.ftcdn.net/jpg/02/89/35/79/240_F_289357966_mquiPqiV1175OE9ApuooMuLvxdXVrgBU.jpg"},
     { id: 39, name: "Fish Biryani", price: 150, img:"https://t3.ftcdn.net/jpg/08/22/27/48/240_F_822274881_WFIFHeoTcykis5NWVmilwCKkzYMtB53D.jpg"},
     { id: 40, name: "Grilled Fish", price: 150, img:"https://t4.ftcdn.net/jpg/01/57/58/09/240_F_157580962_PGzcBcdxp2I16PM0iYZVfaY0l9BpJu7Z.jpg"}
     
  ];
  // 16 More Extra Items → Total 40
  const extraItems = Array.from({ length: 16 }, (_, i) => ({
    id: 25 + i,
    name: `Non-Veg Special ${i + 1}`,
    price: Math.floor(Math.random() * 300) + 80,
    img: "nonveg.jpg",
  }));

  // Combine All NON-Veg Items
  const nonVegItems = [...baseItems, 40];

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

    {/* Product Cards */}
    <div className="card-grid">
      {pageItems
        ?.filter(item => item && item.id) // prevents undefined errors
        .map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
    </div>

    {/* Pagination (4 pages only) */}
    <div className="pagination">
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        ⬅ Previous
      </button>

      {[1, 2, 3, 4].map((num) => (
        <button
          key={num}
          className={page === num ? "active-page" : ""}
          onClick={() => setPage(num)}
        >
          {num}
        </button>
      ))}

      <button onClick={() => setPage(page + 1)} disabled={page === 4}>
        Next ➡
      </button>
    </div>

  </div>
);

}

export default NonVeg;