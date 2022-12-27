import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";
const Categories = () => {
  return (
    <div className="categories">
      <div className="categories-head">
        <div>CAREFULLY CREATED COLLECTIONS</div>
        <h5>BROWSE OUR CATEGORIES</h5>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-8 col-12 categori-item">
            <Link to="/shoppage">
              <img
                src={require("../../Image/product_1.png")}
                alt="product 1"
              ></img>
            </Link>
          </div>
          <div className="col-lg-6 col-sm-6 col-12 categori-item">
            <Link to="/shoppage">
              <img
                src={require("../../Image/product_2.png")}
                alt="product 2"
              ></img>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6 categori-item">
            <Link to="/shoppage">
              <img
                src={require("../../Image/product_3.png")}
                alt="product 3"
              ></img>
            </Link>
          </div>
          <div className="col-lg-4 col-sm-6 categori-item">
            <Link to="/shoppage">
              <img
                src={require("../../Image/product_4.png")}
                alt="product 4"
              ></img>
            </Link>
          </div>
          <div className="col-lg-4 col-sm-6 categori-item">
            <Link to="/shoppage">
              <img
                src={require("../../Image/product_5.png")}
                alt="product 5"
              ></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
