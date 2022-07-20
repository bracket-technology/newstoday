import React from "react";
import "./styles.css";
import "./mobile.css";
import logo from "../../../assets/forgotpassword/bg.png";

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
            adress that you used to register and we will give you instructions
            to reset your password.
          </h3>
          <form>
            <label htmlFor="">Email</label>
            <br />
            <input type="text" placeholder="Enter your email" />
            <br />
            <br />
            <div className="button-fp d-flex justify-content-between">
              <button>Resend link</button>
              <button>Send</button>
            </div>
            <br />
          </form>
          
        </div>
        <div className="fp-footer">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <p>Why News Today</p>
                  <p>Community</p>
                  <p>Be an author</p>
                  <p>FAQ</p>
                </div>
                <div className="col-md-6">
                  <p>News Today</p>
                  <p>Jendral Sudirman Street No. 23 Jakarta, Indonesia</p>
                  <p>(621)989898934</p>
                  <p>newstoday@mail.com</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default ForgotPassword;
