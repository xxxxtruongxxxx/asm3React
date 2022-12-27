import React from "react";
import "./Checkout.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import priceFormat from "../../hook/priceFormat";
import getItemFromLocalStorage from "../../hook/getItemFromLocalStorage";
import LiveChatIcon from "../../components/LiveChat/liveChatIcon";
const Checkout = () => {
  const currentUser = getItemFromLocalStorage("currentUser") || [];
  // console.log(currentUser);
  const listItemInCart = useSelector((state) => state.cart.listItem);
  // console.log("Đây là checkout:", listItemInCart);
  let cartTotal = 0;
  listItemInCart.forEach((element) => {
    cartTotal += element.quantity * element.price;
  });
  return (
    <div>
      <Navbar></Navbar>
      <div className="checkout">
        <h2>CHECKOUT</h2>
        <h4>BILLING DETAILS</h4>
        <div className="checkout-content row gx-0">
          <div className="col-8 checkout-info">
            <label>FULL NAME:</label>
            <div>
              <input
                defaultValue={currentUser.name}
                size={100}
                placeholder="Enter Your Full Name Here!"
              ></input>
            </div>
            <label>EMAIL:</label>
            <div>
              <input
                defaultValue={currentUser.email || ""}
                placeholder="Enter Your Email Here!"
              ></input>
            </div>
            <label>PHONE NUMBER:</label>
            <div>
              <input
                defaultValue={currentUser.phone}
                placeholder="Enter Your Phone Number Here!"
              ></input>
            </div>
            <label>ADDRESS:</label>
            <div>
              <input placeholder="Enter Your Address Here!"></input>
            </div>
            <button>Place order</button>
          </div>
          <div className="col-4 checkout-order">
            <h4>YOUR ORDER</h4>
            {listItemInCart.map((item) => (
              <div className="row checkout-order-row" key={item.id}>
                <div className="col-8 checkout-order-row-name">{item.name}</div>
                <div className="col-4 checkout-order-opacity">
                  {priceFormat(item.price)} x {item.quantity}
                </div>
              </div>
            ))}
            <div className="row checkout-total">
              <div className="col-8">TOTAL</div>
              <div className="col-4 checkout-order-opacity">
                {priceFormat(cartTotal)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <LiveChatIcon></LiveChatIcon>
      <Footer></Footer>
    </div>
  );
};

export default Checkout;
