import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import "./mobile.css";
import logo from "../../../assets/svg/bg3.svg";
import { SendForgot } from "../../../Redux/actions/Verify";
import Metatags from "../../../Components/Metatags";
import { FaChevronLeft } from 'react-icons/fa'
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState({});
  const { loading } = useSelector((s) => s.verify);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SendForgot(email));
  };

  return (
    <>
      <Metatags title={"Forgot Password | News Today"} />
      <div className="box-fp">
        <div className="split-fp left-fp">
          <div className="fp-back">
           <Link to="/"><FaChevronLeft className="fp-back-icon"/>Back</Link>
          </div>
          <img src={logo} alt="logo" />
        </div>

        <div className="split-fp right-fp">
          <div className="right-box-fp">
            <h4>DON'T WORRY</h4>
            <h3>
              We are here to help you to recover your password. Enter your email
              address that you used to register and we will give you
              instructions to reset your password.
            </h3>
            <form onSubmit={(e) => handleSubmit(e)}>
              <label htmlFor="">Email</label>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) =>
                  setEmail((prevData) => ({
                    ...prevData,
                    email: e.target.value,
                  }))
                }
              />
              <br />
              <br />
              <div className="button-fp d-flex justify-content-end">
                {loading ? (
                  <button type="submit" disabled>
                    {" "}
                    Loading...{" "}
                  </button>
                ) : (
                  <button type="submit">Send</button>
                )}
              </div>
              <br />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
