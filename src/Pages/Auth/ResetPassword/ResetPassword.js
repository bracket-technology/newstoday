import React, { useEffect, useState } from "react";
import "./styles.scss";
import "./mobile.scss";
import logo from "../../../assets/svg/bg2.svg";
import Metatags from "../../../Components/Metatags";
import { useNavigate, useSearchParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { ResetPassword1, VerifyCode } from "../../../Redux/actions/Verify";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useSearchParams() // eslint-disable-line
  const [password, setPassword] = useState({})

  const { Reset } = useSelector((s) => s.verify)

  useEffect(() => {
    if (query.get('code') === null && query.get('email') === null) {
      navigate('/forgotpassword')
    }
    if (Reset.success) {
      navigate('/signin')
    }
  }, [Reset]) // eslint-disable-line

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(ResetPassword1({ email: query.get('email'), code: query.get('code'), newPassword: password.newPassword, confrimPassword: password.confrimPassword }))
  }


  return (
    <>
      <Metatags title={'Reset Password | News Today'} />
      <div className="split-rp left-rp">
        <img src={logo} alt="logo" />
      </div>

      <div className="split-rp right-rp">
        <div className="right-box-rp">
          <h4>RESET YOUR PASSWORD</h4>
          <h3>
            We are here to help you to recover your password. Enter new password and confirm new password to reset your password.
          </h3>
          <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="">Password</label>
            <br />
            <input type="password" placeholder="Enter your password" onChange={(e) => setPassword((prevData) => ({ ...prevData, newPassword: e.target.value }))} />
            <br />
            <label htmlFor="">Confirm Password</label>
            <br />
            <input type="password" placeholder="Confirm your password" onChange={(e) => setPassword((prevData) => ({ ...prevData, confrimPassword: e.target.value }))} />
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
}

export default ResetPassword;
