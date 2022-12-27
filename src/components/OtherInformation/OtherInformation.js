import React from "react";
import "./OtherInformation.css";

const OtherInformation = () => {
  return (
    <div className="container otherInfo">
      <div className="row">
        <div className="col-4 otherInfoItem">
          <div>FREE SHIPPING</div>
          <p>Free shipping worldwide</p>
        </div>
        <div className="col-4 otherInfoItem">
          <div>24 X 7 SERVICE</div>
          <p>Free shipping worldwide</p>
        </div>
        <div className="col-4 otherInfoItem">
          <div>FESTIVAL OFFER</div>
          <p>Free shipping worldwide</p>
        </div>
      </div>
      <div className="row otherInfoBot">
        <div className="col-6 otherInfoBot-Left">
          <div>LET'S BE FRIENDS!</div>
          <p>Nisi nisi tempor consequat laboris nisi.</p>
        </div>
        <div className="col-6 otherInfoBot-Right">
          <input placeholder="Enter your email address" size="35"></input>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default OtherInformation;
