import React from "react";
import "./styles.css";
import "./mobile.css";
import logo from "../../../assets/news/n3.jpg";

const ForgotPassword = () => {
  return (
    <>
      <div className="split-fp left-fp">
        <img src={logo} alt="" />
      </div>

      <div className="split-fp right-fp">
        <div className="right-box-fp">
          <h4>DON'T WORRY</h4>
          <h3>
            We are here to help you to recover your password. Enter your email
            address that you used to register and we will give you instructions
            to reset your password.
          </h3>
          <form>
            <label htmlFor="">Email</label>
            <br />
            <input type="text" placeholder="Enter your email" />
            <br />
            <br />
            <div className="button-fp d-flex justify-content-end">
              <button>Send</button>
            </div>
            <br />
          </form>
          
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
