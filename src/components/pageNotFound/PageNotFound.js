import React from "react";
import { Link } from "react-router-dom";
import "./pageNotFound.css";
const PageNotFound = () => {
  let randomA = Math.floor(Math.random() * 826);

  return (
    <div className="error-container">
      <div className="error-form">
        <h1 className="title "> 404</h1>
        <h2 className="title"> Page Not Found</h2>
        <img
          className="error-img"
          src={`https://rickandmortyapi.com/api/character/avatar/${randomA}.jpeg`}
          alt="404"
        />
        <Link to={"/"} className="btn-modal-close text error-text">
          Go back!
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
