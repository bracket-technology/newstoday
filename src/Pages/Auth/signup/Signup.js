import React, { useEffect, useState } from "react";
import "./styles.css";
import "./mobile.css";
import Left from "../components/Left";
import facebook from '../../../assets/social/facebook.svg'
import twitter from '../../../assets/social/twitter.svg'
import google from '../../../assets/social/google.svg'
import { useDispatch, useSelector } from "react-redux";
import { GetAuthRegister } from "../../../Redux/actions/Auth";
import Metatags from "../../../Components/Metatags";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formRegister, setFormRegister] = useState({})

  const { loading, isLogin, GetAuth } = useSelector((s) => s.auth)

  useEffect(() => {
    if (isLogin) {
      navigate('/', { replace: true })
    }
    if (GetAuth.message === 'Successfully Register, Check your email to verify your account!') {
      navigate('/signin')
    }
  }, [GetAuth]) // eslint-disable-line
  // console.log(GetAuth)

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(GetAuthRegister(formRegister))

  }


  return (
    <>
      <Metatags title={'SignUp | News Today'} />
      <div className="split-su left-su">
        <Left isLogin={false}/>
      </div>

      <div className="split-su right-su">
        <div className="right-box-su">
          <h4>Sign Up</h4>
          <h3>Hey, welcome to News Today! Create an account to enjoy our full feautres!</h3>
          <form onSubmit={(e) => handleRegister(e)}>

            <label htmlFor="">Email</label>
            <br />
            <input type="text" placeholder="Enter your email" onChange={(e) => setFormRegister((prevData) => ({ ...prevData, email: e.target.value }))} required />
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input type="password" placeholder="Enter your password" onChange={(e) => setFormRegister((prevData) => ({ ...prevData, password: e.target.value }))} required />
            <br />
            <label htmlFor="">Phone number</label>
            <br />
            <input type="number" placeholder="Enter your phone number" onChange={(e) => setFormRegister((prevData) => ({ ...prevData, phone: e.target.value }))} required />
            <br />
            {loading ? <button type="submit" disabled>Loading...</button> : <button type="submit">Sign Up</button>}
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
