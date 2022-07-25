import React from "react";
import "./styles.scss";
import "./mobile.scss";
import Navbar from "../../Components/Navbar";
import avatar from "../../assets/users/user3.jpg";
import Footer from "../../Components/Footer/Footer";
import Sidebar from "./Component/Sidebar";
import Metatags from "../../Components/Metatags";
// import { useDispatch, useSelector } from "react-redux";

const ProfilePage = () => {



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
                  <img src={avatar} alt="avatar" />
                </div>
                {/* <div className="set-profile-file">
                  <FiEdit3 className="set-profile-icon" />
                  <input type="file" />
                </div> */}
                <div className="form-profile">
                  <form>
                    <div className="set-form-profile">
                      <label htmlFor="">Username</label>
                      <br />
                      <input type="text" placeholder="Enter your username" />
                      <br />
                      <label htmlFor="">Email</label>
                      <br />
                      <input type="text" placeholder="Enter your email" />
                      <br />
                      <label htmlFor="">Job</label>
                      <br />
                      <input type="text" placeholder="Enter your job" />
                      <br />
                      <label htmlFor="">About</label>
                      <br />
                      <textarea type="text" placeholder="Tell us about your self" />
                    </div>
                    <div className="set-form-profile">
                      <label htmlFor="">Name</label>
                      <br />
                      <input type="text" placeholder="Enter your name" />
                      <br />
                      <label htmlFor="">Profile Image</label>
                      <br />
                      <input className="form-control" type="file" />
                      <div className="profile-button">
                        <button>Save Changes</button>
                        <br />
                        <br />
                        <button>Request to be an author</button>
                      </div>
                    </div>
                  </form>
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
