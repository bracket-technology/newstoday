import React from "react";
import "./styles.scss";
import "./mobile.scss";
import Navbar from "../../Components/Navbar";
import avatar from "../../assets/users/user2.jpg";
import verif from "../../assets/icons/checked.svg";

const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="profile-page">
          <div className="row">
            <div className="user-box1 col-md-4">
              <h2>Profile</h2>
              <div className="user-box1-card">
                <div className="user-box1-card-img">
                  <img src={avatar} alt="avatar" />
                </div>
                  <input
                    class="form-control form-control-sm"
                    type="file"
                  />
              </div>
            </div>
            <div className="user-box2 col-md-6">
              <div className="user-box2-img">
                <img src={avatar} alt="user" />
              </div>
              <div className="profile-details">
                <h4>@madison</h4>
                <h2>Madison</h2>
                <p>
                  Author
                  <span>
                    <img src={verif} alt="verified" />
                  </span>
                </p>
                <div className="about-me">
                  <h3>About me</h3>
                  <p>
                    Madison Blackstone is a director of publisher, with
                    experience managing global teams.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-6">
              <div className="author-panel col-md-6">
                <div className="panel-card">
                  <p>16</p>
                  <p>POST</p>
                </div>
                <div className="panel-card">
                  <p>16.5k</p>
                  <p>LIKE</p>
                </div>
                <div className="panel-card">
                  <p>160</p>
                  <p>COMMENT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
