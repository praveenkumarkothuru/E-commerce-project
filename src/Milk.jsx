import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./Store";
import "./Style.css";
import ProductCard from "./ProductCard";

function Milk() {
  const dispatch = useDispatch();

  // Base Milk Items
  const baseItems = [
    { id: 1, name: " Cream Milk ", price: 65, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_JmCqmWbT7FNX4Ca8IntUKDApH9muVIPSBA&s" },
    { id: 2, name: "Recipe Rebel", price: 55, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAgf2ucJxseRdDcKg8i6YGrv_yPy_4mSYxw&s" },
    { id: 3, name: " Milk Shake ", price: 70, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCFDEtlj6sepvfDr-5wSEs2KWcmJcf1Cq9yQ&s" },
    { id: 4, name: "Tasty Milk", price: 40, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpLdP5PjpnpFimYd3WX8L6-r90yMOT3aLXnA&s" },
    { id: 5, name: "Black Milk", price: 55, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7MuZ5sZGJZP22wtP85GMVkQT9HBCnZ8WI0w&s" },
    { id: 6, name: " Cream Milk ", price: 65, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRePVM8WZ9OhG42weUCaP1T6cHYJNNf1ItpFw&s" },
    { id: 7, name: "Toned shake ", price: 55, img: "data:image/jpeg;base64,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" },
    { id: 8, name: "Strawberry Shake", price: 70, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCWj-PMd8rWaVjmHMeJoXFfBg_znL_i2XTvA&s" },
    { id: 9, name: "ButterScotch", price: 40, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZg_ZZapA8SrUjxOjf-5-Nql6rq36ZGMvB8w&s" },
     { id: 10, name: "Oreo Milkshake", price: 150, img:"https://t4.ftcdn.net/jpg/18/34/89/53/240_F_1834895364_uFn4c5owUTWVGFHVZ5xR8uWO7tboOJqt.jpg"},
     { id: 11, name: "Mango Milkshake", price: 150, img:"https://t4.ftcdn.net/jpg/10/56/67/41/240_F_1056674190_eEh3FmxaktTnYWzNARJQhsnY07YBZc0P.jpg"},
     { id: 12, name: "Pineapple Milkshake", price: 150, img:"https://t3.ftcdn.net/jpg/10/37/83/62/240_F_1037836217_ZMWNIqqFzidoEzOdZCemMJ7CijNwOEXL.jpg"},
      { id: 13, name: "Blueberry Milkshake", price: 150, img:"https://t3.ftcdn.net/jpg/08/14/92/18/240_F_814921865_ScaksebEBHGchDongLahvwyQ9Q8vzDqw.jpg"},,
     { id: 14, name: "Mango-Pineapple Milkshake", price: 150, img:"https://t4.ftcdn.net/jpg/06/18/47/13/240_F_618471359_VYmnluPZvDxd3b5yyfwggIfU2SdSpdOy.jpg"},
     { id: 15, name: "Kiwi Milkshake", price: 150, img:"https://t4.ftcdn.net/jpg/16/09/97/99/240_F_1609979967_pP2xTe7XqHIt5aMUsIHEA3iKAKBHQ2m5.jpg"},
     { id: 16, name: "Mixed Fruit Milkshake", price: 150, img:"https://t3.ftcdn.net/jpg/15/42/48/92/240_F_1542489223_MrZsI3GvxADuqQ3uEmkPzv2k3hABSzVA.jpg"},  
      { id: 17, name: "Chocolate Milkshake", price: 150, img:"https://t4.ftcdn.net/jpg/06/60/40/71/240_F_660407192_MoVq9xZOjh25x5HGZOvnULKyNxRvOWj3.jpg"},
     { id: 18, name: "Banana Milkshake", price: 150, img:"https://t3.ftcdn.net/jpg/06/20/49/48/240_F_620494830_UlF1uV5CbIgL4LZHtHucURi5EXb00b9O.jpg"},
     { id: 19, name: "Butterscotch Milkshake", price: 150, img:"https://t4.ftcdn.net/jpg/10/55/31/33/240_F_1055313323_4XTWO1k6PuYxJZTB4XNO8gEIMpuCzIiv.jpg"},
     { id: 20, name: "KitKat Milkshake", price: 150, img:"https://t3.ftcdn.net/jpg/06/26/66/90/240_F_626669060_SA2gG4S8kmMgPFSDT11WJGExdQnbMxj9.jpg"},
      { id: 21, name: "Nutella Milkshake", price: 150, img:"https://t4.ftcdn.net/jpg/12/49/28/19/240_F_1249281933_a1ZALJjwNWNSPvMBM4nxnjb83nOr9hGK.jpg"},
     { id: 22, name: "Coffee Milkshake", price: 150, img:"https://t3.ftcdn.net/jpg/03/16/01/48/240_F_316014817_EC1KN7mAD86ALYhhwGUUeSsQoJIVMtfQ.jpg"},
     { id: 23, name: "Papaya", price: 150, img:"https://t4.ftcdn.net/jpg/17/09/31/53/240_F_1709315329_gxGEqX48MWGJIwEM9BHosW1kB70auj2S.jpg"},
     { id: 24, name: "Chocolate Banana", price: 150, img:"https://t4.ftcdn.net/jpg/16/55/01/61/240_F_1655016199_GFMHJoBgVEqI0j7XdRl7QSNzXpAZtv7g.jpg"},
     { id: 25, name: "Apple Juice", price: 150, img:"https://t4.ftcdn.net/jpg/02/77/06/43/240_F_277064322_BDHjbWYgMUeLuEOB1lZ00ckzsCm9U0eW.jpg"},
      { id: 26, name: "Watermelon Juice", price: 150, img:"https://t3.ftcdn.net/jpg/02/20/16/60/240_F_220166076_VXBRg9lpXCWEeqAaG7MqxqYFAL20Owzj.jpg"},
      { id: 27, name: "Pomegranate Juice", price: 150, img:"https://t3.ftcdn.net/jpg/02/61/05/76/240_F_261057645_FMtzH6YOL09iuTjz8v2EoP2F23gHtzCz.jpg"},
     { id: 28, name: "Cranberry Juice", price: 150, img:"https://t4.ftcdn.net/jpg/02/79/63/89/240_F_279638920_Gydfpq19Yat5LerhHddF33sysTorGoSN.jpg"},
      { id: 29, name: "Cucumber Juice", price: 150, img:"https://t4.ftcdn.net/jpg/03/17/28/47/240_F_317284715_kJF9gjX4C4zIY6MiUAc9bkZL08kLXUT8.jpg"},,
     { id: 30, name: "Lychee Juice", price: 150, img:"https://t4.ftcdn.net/jpg/08/25/94/43/240_F_825944379_BlXo4gJ3pxYH5NY7w456wFI13PFnxuMs.jpg"},
     { id: 31, name: "Cherry Juice", price: 150, img:"https://t3.ftcdn.net/jpg/16/24/52/58/240_F_1624525814_UsIuCepgttGeSf88Fim4mOOHeJIjSOqY.jpg"},
     { id: 32, name: "Mixed Fruit Juice", price: 150, img:"https://t3.ftcdn.net/jpg/15/36/44/10/240_F_1536441003_jDGmaIAe2X6qhb1NR5UJ3N7UaMPKow2l.jpg"},  
      { id: 33, name: "Blueberry Juice", price: 150, img:"https://t4.ftcdn.net/jpg/17/07/28/07/240_F_1707280705_pWrFkS1xwkEj2BSd2UzryCUQrwCEIXUR.jpg"},
     { id: 34, name: "Cranberry Juic", price: 150, img:"https://t3.ftcdn.net/jpg/00/94/37/86/240_F_94378686_5Vvkk340FOoZcqq29dLu7zSmyCS6gCCc.jpg"},
     { id: 35, name: "Peach Juice", price: 150, img:"https://t3.ftcdn.net/jpg/03/88/09/90/240_F_388099039_oxoP1E3WLhYnM2QND8tynqQKDoVJK90y.jpg"},
     { id: 36, name: "Peanut Butter Milkshake", price: 150, img:"https://t4.ftcdn.net/jpg/17/83/48/69/240_F_1783486926_MjBugl4c04VDlqDauDxCUXhfvyIx7I99.jpg"},
      { id: 37, name: "Carrot Juice", price: 150, img:"https://t4.ftcdn.net/jpg/10/69/42/23/240_F_1069422322_PO8RdeKAe0JoP33HHqBKeZXvpkdcdeX0.jpg"},
     { id: 38, name: "Grapefruit Juice", price: 150, img:"https://t4.ftcdn.net/jpg/00/70/84/53/240_F_70845362_Ks5IKfQnAJCRHN9Zdgjyar23I8HWip1s.jpg"},
     { id: 39, name: "Grapes juice", price: 150, img:"https://t4.ftcdn.net/jpg/02/24/98/21/240_F_224982199_696JHnJE1d7L1pEbhiUhBBS92sROD9IA.jpg"},
     { id: 40, name: "Peanut Butter Milkshake", price: 150, img:"https://t4.ftcdn.net/jpg/18/31/85/89/240_F_1831858987_MVGzdYWHBGIdur85jpYQGVUX7MQwk7Z6.jpg"}
  ];
  // Auto Extra Items
  const extraItems = Array.from({ length: 16 }, (_, i) => ({
    id: 150 + i,
    name: `Milk Special ${i + 1}`,
    price: Math.floor(Math.random() * 80) + 40,
    img: "milk.jpg",
  }));

  // Combine all items
  const milkItems = [...baseItems, 40];

  // Pagination Setup
  const itemsPerPage = 10;
  const [page, setPage] = useState(1);

  const start = (page - 1) * itemsPerPage;
  const pageItems = milkItems.slice(start, start + itemsPerPage);

  const totalPages = Math.ceil(milkItems.length / itemsPerPage);

 return (
    <div className="veg-container">
      <div style={{ padding: "40px 20px" }}></div>

      <h1 style={{ textAlign: "center", marginBottom: "25px" }}>
        🥛 Milk & Dairy Items
      </h1>

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

export default Milk;
