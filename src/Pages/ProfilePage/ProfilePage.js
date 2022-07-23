import React from "react";
import './styles.scss'
import './mobile.scss'
import NavbarUser from "../../Components/Navbar/NavbarUser";
import avatar from '../../assets/users/user2.jpg'
import verif from '../../assets/icons/checked.svg'

const ProfilePage = () => {
  return (
    <>
      <NavbarUser />
      <div className="container">
        <div className="profile-page">
          <div className="user-box">
            <img src={avatar} alt="user" />
            <div className="profile-details">
              <h4>@kendalljenner</h4>
              <h2>Kendall Jenner</h2>
              <p>Author<span><img src={verif} alt="verified" /></span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
