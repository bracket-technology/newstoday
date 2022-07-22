import React, { useState } from "react";
import "./NavbarUser.scss";
import "./NavbarUserMobile.scss";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdNotificationsNone } from "react-icons/md";
import avatar from "../../assets/users/user1.jpg";

const NavbarUser = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbarUser">
      <div className="container d-flex">
        <div className="logo-user">
          <h2>
            News <span>Today</span>
          </h2>
        </div>
        <div className={toggle ? "nav-menu-user active" : "nav-menu-user"}>
          <div className="nav-links-user active">Home</div>
          <div className="nav-links-user">Article</div>
          <div className="nav-links-user">Category</div>
          <div className="nav-links-user">About</div>
          <div className="button-user">
            <MdNotificationsNone
              className="icon"
              onClick={() => setToggle(!toggle)}
            />
            <div className={toggle ? "notif-box active" : "notif-box"}>
              <div className="notif-box-user">
                <div className="notif-box-user-details d-flex">
                  <img src={avatar} alt="" />
                  <h4>has liked your post</h4>
                  <h3>3 min ago</h3>
                </div>
                <div className="notif-box-user-details d-flex">
                  <img src={avatar} alt="" />
                  <h4>Mike just liked your post</h4>
                  <h3>3 min ago</h3>
                </div>
                <div className="notif-box-user-details d-flex">
                  <img src={avatar} alt="" />
                  <h4>has sent you a comment</h4>
                  <h3>3 min ago</h3>
                </div>
                <h2>See more</h2>
              </div>
            </div>
            <span>3</span>
            <Link to="/profile">
              <img src={avatar} alt="" />
            </Link>
          </div>
          <p>Copyright© 2022 News Today. All right reserved.</p>
        </div>
        <div className="nav-icon-user" onClick={() => setToggle(!toggle)}>
          {toggle ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default NavbarUser;
