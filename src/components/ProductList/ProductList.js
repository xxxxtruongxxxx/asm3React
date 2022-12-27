import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import ProductListItem from "./ProductListItem";
const ProductList = () => {
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

  const currentCategory = useSelector((state) => state.category.value);
  // console.log(data);
  // console.log(`Đây là cate hiện tại:`, currentCategory);
  return (
    <div className="ProductList row gx-0">
      {currentCategory === `all` && // khi category = all thì hiển thị tất cả product ( mặc định là all)
        data.map((item) => (
          <ProductListItem
            key={item._id.$oid || item.name}
            product={{
              category: item.category,
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
          ></ProductListItem>
        ))}

      {currentCategory !== `all` && // Khi category khác all thì đi so sánh với các giá trị category click vào và hiển thị các sản phẩm tương ứng
        data.map((item) =>
          item.category === currentCategory ? (
            <ProductListItem
              key={item._id.$oid || item.name}
              product={{
                category: item.category,
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
            ></ProductListItem>
          ) : (
            <></>
          )
        )}
    </div>
  );
};

export default ProductList;
