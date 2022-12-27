import React from "react";
import { useDispatch } from "react-redux";

import { popupActions } from "../../store/popupRedux";
import "./TrendingListItem.css";
import priceFormat from "../../hook/priceFormat"; // import hook định dạng tiền

const TrendingListItem = (props) => {
  const price = priceFormat(props.product.price);

  const dispatch = useDispatch();

  const displayPopup = () => {
    dispatch(popupActions.SHOW_POPUP(props.product));
  };

  // const closePopup = () => {
  //   dispatch(popupActions.HIDE_POPUP());
  // };

  return (
    <div onClick={displayPopup} className="TrendingListItem col-sm-6 col-lg-3">
      <img src={props.product.img1} alt={props.product.name}></img>
      <div>{props.product.name}</div>
      <div>{price}</div>
    </div>
  );
};

export default TrendingListItem;
