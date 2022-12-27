import React from "react";
import { useSelector } from "react-redux";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import ProductList from "../../components/TrendingList/TrendingList";
import Popup from "../../components/Popup/Popup";
import OtherInformation from "../../components/OtherInformation/OtherInformation";
import LiveChatIcon from "../../components/LiveChat/liveChatIcon";
import "./HomePage.css";
const HomePage = () => {
  const show = useSelector((state) => state.popup.showPopup);
  const popupData = useSelector((state) => state.popup.data);

  return (
    <div>
      <div className="home-content">
        <Navbar></Navbar>
        <Banner></Banner>
        <Categories></Categories>
        <ProductList></ProductList>
        <OtherInformation></OtherInformation>

        {show === true ? <Popup propductData={popupData}></Popup> : <></>}
        {/* (document.getElementById("app-root").style.filter = "blur(5px)") */}
      </div>
      <LiveChatIcon></LiveChatIcon>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
