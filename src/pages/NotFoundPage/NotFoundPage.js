import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div>
        <h1>Page Not Found !!!</h1>
      </div>
      <br></br>
      <div>
        <Link to="/">Back to Home Page</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
