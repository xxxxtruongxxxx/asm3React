import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ShopCategories from "./ShopCategories";
import ProductList from "../../components/ProductList/ProductList";

import "./ShopPage.css";
import LiveChatIcon from "../../components/LiveChat/liveChatIcon";

const ShopPage = () => {
  return (
    <div className="shopPage">
      <div>
        <Navbar></Navbar>
        <div className="shop-content">
          <h2>SHOP</h2>
          <div className="row gx-0">
            <ShopCategories />
            <div className="col-10">
              <ProductList>Hello</ProductList>
            </div>
          </div>
        </div>
      </div>
      <LiveChatIcon></LiveChatIcon>
      <Footer></Footer>
    </div>
  );
};

export default ShopPage;
