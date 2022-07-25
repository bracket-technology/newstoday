import React, { useEffect } from "react";
import "./styles.scss";
import "./mobile.scss";
import Navbar from "../../Components/Navbar";
import avatar from "../../assets/users/user3.jpg";
import Footer from "../../Components/Footer/Footer";
import Sidebar from "./Component/Sidebar";
import Metatags from "../../Components/Metatags";
import { useDispatch, useSelector } from "react-redux";
import { VerifyToken } from "../../Redux/actions/Verify";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const { GetAuth } = useSelector(state => state.auth);
  const { GetVerify } = useSelector((state) => state.verify);
  // console.log(GetVerify, 'GetVerify')

  useEffect(() => {
    dispatch(VerifyToken(GetAuth.data.token));
  }, [dispatch]); // eslint-disable-line

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <>
      <Metatags title={'Profile | News Today'} />
      <Navbar />
      <div className="container">
        <div className="profile-page">
          <div className="row">
            <Sidebar />
            <div className="user-box2 col-md-8">
              <div className="set-profile">
                <div className="set-profile-img">
                  <img src={GetVerify.userImage === 'https://divedigital.id/wp-content/uploads/2021/10/1-min.png' ? GetVerify.userImage : `${process.env.REACT_APP_URL_IMG}/${GetVerify.userImage}`} alt="avatar" />
                </div>
                <div className="form-profile">
                  <form encType="multipart/form-data" onSubmit={(e) => handleSubmit(e)}>
                    <div className="set-form-profile">
                      <label htmlFor="">Username</label>
                      <br />
                      <input type="text" placeholder="Enter your username" value={GetVerify.username} required />
                      <br />
                      <label htmlFor="">Email</label>
                      <br />
                      <input type="text" placeholder="Enter your email" value={GetVerify.email} required />
                      <br />
                      <label htmlFor="">Job</label>
                      <br />
                      <input type="text" placeholder="Enter your job" value={GetVerify.job} required />
                      <br />
                      <label htmlFor="">About</label>
                      <br />
                      <textarea type="text" placeholder="Tell us about your self" value={GetVerify.description} required />
                    </div>
                    <div className="set-form-profile">
                      <label htmlFor="">Name</label>
                      <br />
                      <input type="text" placeholder="Enter your name" value={GetVerify.name} required />
                      <br />
                      <label htmlFor="">Phone</label>
                      <br />
                      <input type="number" placeholder="Enter your phone number" value={GetVerify.phone} required />
                      <br />
                      <label htmlFor="">Profile Image</label>
                      <br />
                      <input className="form-control remove-border" type="file" />
                      <div className="profile-button">
                        <button>Save Changes</button>
                        <br />
                      </div>
                    </div>
                  </form>
                  <br />
                  <button className="request-btn">Request to be an author</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
