import React, { useEffect } from "react";
import "./styles.scss";
import "./mobile.scss";
import Navbar from "../../Components/Navbar";
import avatar from "../../assets/users/user3.jpg";
import { FiEdit3 } from "react-icons/fi";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Sidebar from "./Component/Sidebar";

const ProfilePage = () => {
  return (
    <>
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
                <div className="set-profile-file">
                  <FiEdit3 className="set-profile-icon" />
                  <input type="file" />
                </div>
                <div className="form-profile">
                  <form>
                    <div className="set-form-profile">
                      <label htmlFor="">Username</label>
                      <br />
                      <input type="text" />
                      <br />
                      <label htmlFor="">Email</label>
                      <br />
                      <input type="text" />
                      <br />
                      <label htmlFor="">Job</label>
                      <br />
                      <input type="text" />
                      <br />
                      <label htmlFor="">About</label>
                      <br />
                      <textarea type="text" />
                    </div>
                    <div className="set-form-profile">
                      <label htmlFor="">Name</label>
                      <br />
                      <input type="text" />
                      <br />
                      <button>Save Changes</button>
                      <br />
                      <Link to="/resetpassword"><button>Reset Password</button></Link>
                      <br />
                      <button>Request to be an author</button>
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
