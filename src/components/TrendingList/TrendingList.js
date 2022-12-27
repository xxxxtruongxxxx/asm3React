import React from "react";
import { useEffect, useState } from "react";

import TrendingListItem from "./TrendingListItem";

const TrendingList = () => {
  const [data, setData] = useState([]);
  async function getData() {
    const response = await fetch(
      `https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74`
    );
    const data = await response.json();
    setData(data); // truyền dữ liệu lấy được vào data
    return data;
  }
  useEffect(() => {
    getData(); // Gọi hàm để lấy dữ liệu
  }, []);

  // console.log(data);

  return (
    <div className="TrendingList row">
      {data.map((item) => (
        <TrendingListItem
          key={item._id.$oid}
          product={{
            category: "iphone",
            img1: item.img1,
            img2: item.img2,
            img3: item.img3,
            img4: item.img4,
            long_desc: item.long_desc,
            name: item.name,
            price: item.price,
            short_desc: item.short_desc,
            _id: item._id.$oid,
          }}
        ></TrendingListItem>
      ))}
    </div>
  );
};

export default TrendingList;
