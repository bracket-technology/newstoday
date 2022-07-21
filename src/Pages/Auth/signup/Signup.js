import React from "react";
import "./styles.css";
import "./mobile.css";
import Left from "../components/Left";
import facebook from '../../../assets/social/facebook.svg'
import twitter from '../../../assets/social/twitter.svg'
import google from '../../../assets/social/google.svg'

const Signup = () => {
  return (
    <>
      <div className="split-su left-su">
        <Left />
      </div>

      <div className="split-su right-su">
        <div className="right-box-su">
          <h4>Sign Up</h4>
          <h3>Hey, welcome to News Today! Create an account to enjoy our full feautres!</h3>
          <form>
            
            <label htmlFor="">Email</label>
            <br />
            <input type="text" placeholder="Enter your email" required />
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input type="password" placeholder="Enter your password" />
            <br />
            <label htmlFor="">Phone number</label>
            <br />
            <input type="text" placeholder="Enter your phone number" required />
            <br />
            <button>Sign up</button>
            <br />
          </form>
          <p className="social text-center mt-4">OR SIGNUP WITH</p>
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

export default Signup;
