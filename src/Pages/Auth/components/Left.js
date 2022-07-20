import React from "react";
import "./styles.css";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const leftSide = () => {
  return (
    <div className="logo-si">
      <div className="top">
        <FaChevronLeft className="icon" />
        <Link to="/">
          <h3>Home Page</h3>
        </Link>
      </div>
      <div className="content">
        <h2>
          News
          <br />
          Today
        </h2>
        <p>newstoday@mail.com</p>
        <div className="line d-flex">
          <hr />
          <p>Already have account?</p>
          <hr />
        </div>
        <div className="login">
          <button>Login here</button>
        </div>
        <div className="bottom">
          <div className="row btm-text">
            <div className="col-md-6">Why News Today</div>
            <div className="col-md-6">Be an author</div>
          </div>
          <div className="row btm-text">
            <div className="col-md-6">Community</div>
            <div className="col-md-6">FAQ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default leftSide;
