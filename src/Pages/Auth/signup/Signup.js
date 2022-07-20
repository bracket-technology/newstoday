import React from "react";
import "./styles.css";
import "./mobile.css";
import Left from "../components/Left";

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
        </div>
      </div>
    </>
  );
};

export default Signup;
