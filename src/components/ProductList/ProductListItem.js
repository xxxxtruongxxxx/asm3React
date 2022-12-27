import React from "react";
import "./ProductListItem.css";
import { Link } from "react-router-dom";

import priceFormat from "../../hook/priceFormat"; // import hook định dạng tiền

const ProductListItem = (props) => {
  const price = priceFormat(props.product.price);

  // const closePopup = () => {
  //   dispatch(popupActions.HIDE_POPUP());
  // };
  // console.log("Đây là props", props);

  return (
    <div className="ProductListItem col-sm-6 col-lg-4">
      <Link to={`/detail/` + props.product._id} state={props.product}>
        <img src={props.product.img1} alt={props.product.name}></img>
        <div>{props.product.name}</div>
        <div>{price}</div>
      </Link>
    </div>
  );
};

export default ProductListItem;
