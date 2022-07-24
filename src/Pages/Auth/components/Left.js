import React from "react";
import "./styles.css";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const leftSide = ({isLogin = true}) => {
  return (
    <div className="logo-si">
      <div className="top">
        <FaChevronLeft className="icon" />
        <Link to="/">
          <h3>Home</h3>
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
          {isLogin ? <p>Dont have an account?</p> : <p>Already have account?</p>}
          
          <hr />
        </div>
        <div className="login">
          {isLogin ? <Link to="/signup"><button>Sign Up</button></Link> :<Link to="/signin"><button>Sign In</button></Link>}
          
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
