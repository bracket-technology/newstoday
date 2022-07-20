import React from "react";
import "./styles.css";
import "./mobile.css";
import Left from "../components/Left";
import facebook from '../../../assets/social/facebook.svg'
import twitter from '../../../assets/social/twitter.svg'
import google from '../../../assets/social/google.svg'

const Signin = () => {
  return (
    <>
      <div className="split-si left-si">
        <Left />
      </div>

      <div className="split-si right-si">
        <div className="right-box-si">
          <h4>Login</h4>
          <h3>Hey, welcome back to News Today</h3>

          <form>
            <label htmlFor="">Email</label>
            <br />
            <input type="email" placeholder="Enter your email" required/>
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input type="password" placeholder="Enter your password" required/>
            <br />
            <button>Sign In</button>
            <br />
          </form>
          <p className="social text-center mt-4">OR LOGIN WITH</p>
          <div className="social-icon">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={google} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
