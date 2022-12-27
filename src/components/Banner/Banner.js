import React from "react";
import { Link } from "react-router-dom";

import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <div>NEW INSPIRATION 2020</div>
        <h3>20% OFF ON NEW SEASON</h3>
        <Link to="/shoppage">
          <button>Browse collections</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
