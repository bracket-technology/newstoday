import React from "react";
import "./styles.scss";
import "./mobile.scss";
import logo from "../../../assets/news/n3.jpg";

const ResetPassword = () => {
  return (
    <>
      <div className="split-rp left-rp">
        <img src={logo} alt="logo" />
      </div>

      <div className="split-rp right-rp">
        <div className="right-box-rp">
          <h4>RESET YOUR PASSWORD</h4>
          <h3>
            We are here to help you to recover your password. Enter new password and confirm new password to reset your password.
          </h3>
          <form>
            <label htmlFor="">Password</label>
            <br />
            <input type="password" placeholder="Enter your password" />
            <br />
            <label htmlFor="">Confirm Password</label>
            <br />
            <input type="password" placeholder="Confirm your password" />
            <br />
            <br />
            <div className="button-rp d-flex justify-content-end">
              <button>Submit</button>
            </div>
            <br />
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
