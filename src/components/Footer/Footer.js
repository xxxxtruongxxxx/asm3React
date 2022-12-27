import React from "react";

import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="footer-col col-4">
          <h4>CUSTOMER SERVICES</h4>
          <div>Help & Contact Us</div>
          <div>Returns & Refunds</div>
          <div>Online Stores</div>
          <div>Terms & Conditions</div>
        </div>
        <div className="footer-col col-4">
          <h4>COMPANY</h4>
          <div>What We Do</div>
          <div>Avalable Services</div>
          <div>Latest Post</div>
          <div>FAQs</div>
        </div>
        <div className="footer-col col-4">
          <h4>SOCIAL MEDIA</h4>
          <div>Twitter</div>
          <div>Instagram</div>
          <div>Facebook</div>
          <div>Pinterest</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
