
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
    { id: 11, name: "Paneer Butter Masala", price: 250, img: "https://media.gettyimages.com/id/1305517229/photo/shahi-paneer-or-paneer-kadai.jpg?s=612x612&w=0&k=20&c=cGJ8LNDv2wWmyNSrW80jqccDIL7HywXbHNlvO5ka9Qs=" },
    { id: 12, name: "Curd Rice", price: 60, img: "https://t3.ftcdn.net/jpg/17/56/32/32/240_F_1756323224_B0wU9hQbwJr31rH0xMCsam5C7di3gwuw.jpg" },
    { id: 13, name: "Mixed Veg Curry", price: 130, img: "https://t4.ftcdn.net/jpg/16/39/32/75/240_F_1639327517_9m29UiT90dLQo9iJ6AMt1cmUxHE75eun.jpg" },
    { id: 14, name: "Veg Sandwich", price: 90, img: "https://t4.ftcdn.net/jpg/06/90/50/29/240_F_690502911_1YIrWy8uNXtXgpUFRar3HCMB5IbMWYpW.jpg" },
    { id: 15, name: "Vegetable Soup", price: 50, img: "https://t4.ftcdn.net/jpg/14/29/69/47/240_F_1429694785_YFBEemIoLVgtkDpEfvp3m4Y3gFdhHQhU.jpg" },
    { id: 16, name: "Paneer Roll", price: 100, img: "https://t3.ftcdn.net/jpg/09/57/22/34/240_F_957223419_QT83e9dez3mc2a6fy4iC8ZWKmmLfbb4t.jpg" },
    { id: 17, name: "Veg Cutlet", price: 60, img: "https://t4.ftcdn.net/jpg/18/03/98/07/360_F_1803980702_w79Z5tlcrNkbAqhDj69jhUzqu9LZEsD7.jpg" },
    { id: 18, name: "Corn Fried Rice", price: 70, img: "https://t4.ftcdn.net/jpg/17/89/01/65/240_F_1789016502_cRuLj1yCAtojwEpOUvg49xpJ9Jzrkv7R.jpg" },
    { id: 19, name: "Gobi Curry", price: 120, img: "https://t4.ftcdn.net/jpg/08/96/19/69/240_F_896196914_zpVcEw0nMTCL3DhD2WinJBJxglr8Bq27.jpg" },
    { id: 20, name: "Kaju Curry", price: 260, img: "https://t3.ftcdn.net/jpg/09/18/96/68/240_F_918966817_J0UfILdoPQAYyQoaav5YrXunGvKc7AGV.jpg" },
    { id: 21, name: "Chana Curry", price: 150, img: "https://t3.ftcdn.net/jpg/09/18/96/68/240_F_918966817_J0UfILdoPQAYyQoaav5YrXunGvKc7AGV.jpg" },
    { id: 22, name: "Veg Korma", price: 160, img: "https://t4.ftcdn.net/jpg/18/12/13/07/240_F_1812130718_jaDkAZLD1ER6q46rK5y8kUkUTaMgxVrA.jpg" },
    { id: 23, name: "Masala Rice", price: 50, img: "https://t4.ftcdn.net/jpg/08/72/39/31/240_F_872393171_wbD1gR6xqBHzLXLI0PqQwWDAUUfVieUR.jpg" },
    { id: 24, name: "Tomato Rice", price: 50, img: "https://t4.ftcdn.net/jpg/06/07/91/93/240_F_607919387_LWGpfHd6MacPQ10IVaQiPRHp7mGRqV2y.jpg" },
     { id: 25, name: "Lemon Rice", price: 150, img:"https://t3.ftcdn.net/jpg/07/82/90/38/240_F_782903813_O6VCLhANJpU0tflATbg9nJPS3RhPWYJf.jpg"},
     { id: 26, name: "Upma", price: 150, img:"https://t4.ftcdn.net/jpg/10/88/62/83/240_F_1088628359_6ZskzdYQNvfT1QICDXE0W9kpISi4kgS4.jpg"},
     { id: 27, name: "Idli", price: 150, img:"https://t3.ftcdn.net/jpg/04/02/12/80/240_F_402128075_06J9Y69ScRrYKFpQr1PAH0L7YziB83ry.jpg"},
     { id: 28, name: "Dosa", price: 150, img:"https://t4.ftcdn.net/jpg/02/17/39/75/240_F_217397519_MqLzfynUsUKGvZj1AB3iPREmr11sYRhk.jpg"},
      { id: 29, name: "Vada", price: 150, img:"https://t3.ftcdn.net/jpg/16/07/63/16/240_F_1607631627_joO0F89rgw7rD6aLhDxpjz3AFaSGI2tE.jpg"},
     { id: 30, name: "Medu Vada", price: 150, img:"https://t3.ftcdn.net/jpg/13/75/96/44/360_F_1375964488_nfKDGGIJliejEtbJr4nDWNphvGZL3vT8.jpg"},
     { id: 31, name: "Samosa", price: 150, img:"https://t3.ftcdn.net/jpg/11/48/71/98/240_F_1148719824_qe4WPbTM0DJ5R9zjoQbTNAxNHArQi3Z0.jpg"},
     { id: 32, name: "Veg Noodles", price: 150, img:"https://t4.ftcdn.net/jpg/05/88/03/99/240_F_588039978_ruGcYC7IhpW8cuRWIcxdlxyV9prlWGPh.jpg"},  
      { id: 33, name: "Paneer Tikka", price: 150, img:"https://t3.ftcdn.net/jpg/17/65/28/80/240_F_1765288054_GVxtUb1vP6upZN2eEeY9IDb3PkTS5gUl.jpg"},
     { id: 34, name: "Chapati", price: 150, img:"https://t3.ftcdn.net/jpg/14/37/81/58/240_F_1437815839_O8CVq0NAuLED65HQb3OA314gWzDjzPxK.jpg"},
     { id: 35, name: "Roti", price: 150, img:"https://t4.ftcdn.net/jpg/08/51/35/07/240_F_851350760_ElqCQPkMAz1mhyCUGawQAUvHqEstTRTA.jpg"},
     { id: 36, name: "Paratha", price: 150, img:"https://t4.ftcdn.net/jpg/16/00/18/63/240_F_1600186307_fQcc6GlfsELBNf1vBAKr2nGcSN6YUshb.jpg"},
      { id: 37, name: "Puri", price: 150, img:"https://t3.ftcdn.net/jpg/11/51/69/32/240_F_1151693283_ONRDD0wNRCuRT3kLMAb1UT0P7yswyqq0.jpg"},
     { id: 38, name: "Bhature", price: 150, img:"https://t3.ftcdn.net/jpg/14/29/81/60/240_F_1429816020_xhhXRA4fu63IVbadmlWTCX1zs7Yi0qKU.jpg"},
     { id: 39, name: "Cabbage Curry", price: 150, img:"https://t4.ftcdn.net/jpg/15/78/42/33/240_F_1578423393_vAr6OGPWRbXIfbT9ZAe4ehLZdIOFAllF.jpg"},
     { id: 40, name: "Mixed Dal", price: 150, img:"https://t4.ftcdn.net/jpg/16/00/85/65/240_F_1600856542_KKZ9ALdjkAf0m5EENKKtACwZmoTAnPOe.jpg"},
     
  ];

    

 const extraItems = Array.from({ length: 16 }, (_, i) => ({
    id: 25 + i,
    name: `Veg Special ${i + 1}`,
    price: Math.floor(Math.random() * 200) + 40,
    img: "veg.jpg",
  }));

  // All veg items
  const vegItems = [...baseItems,40];

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

export default Veg;
