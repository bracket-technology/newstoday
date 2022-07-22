import React, { useEffect, useState } from "react";
import "./styles.css";
import "./mobile.css";
import Left from "../components/Left";
import facebook from '../../../assets/social/facebook.svg'
import twitter from '../../../assets/social/twitter.svg'
import google from '../../../assets/social/google.svg'
import { useDispatch, useSelector } from "react-redux";
import { GetAuthLogin } from "../../../Redux/actions/Auth";
import Metatags from "../../../Components/Metatags";
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formLogin, setFormLogin] = useState({})

  const { loading, isLogin } = useSelector((s) => s.auth)

  useEffect(() => {
    if (isLogin) {
      navigate('/', { replace: true })
    }
  }, [isLogin]) // eslint-disable-line 

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(GetAuthLogin(formLogin))
  }


  return (
    <>
      <Metatags title={'SignIn | News Today'} />
      <div className="split-si left-si">
        <Left />
      </div>

      <div className="split-si right-si">
        <div className="right-box-si">
          <h4>Login</h4>
          <h3>Hey, welcome back to News Today</h3>

          <form onSubmit={(e) => handleLogin(e)}>
            <label htmlFor="">Email</label>
            <br />
            <input type="email" placeholder="Enter your email" onChange={(e) => setFormLogin((prevData) => ({ ...prevData, email: e.target.value }))} required />
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input type="password" placeholder="Enter your password" onChange={(e) => setFormLogin((prevData) => ({ ...prevData, password: e.target.value }))} required />
            <br />
            <Link to="/forgotpassword">Forgot Password?</Link>
            {loading ? <button type="submit" disabled>Loading...</button> : <button type="submit">Login</button>}
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
