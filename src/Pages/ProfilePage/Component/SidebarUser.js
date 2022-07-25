import React from "react";
import verif from "../../../assets/icons/checked.svg";
import { FiLogOut } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import './SidebarUser.scss'
import { useSelector, useDispatch } from "react-redux";
// import LoaderSiderbar from "./LoaderSidebar";
import { AuthLogout } from "../../../Redux/actions/Auth";

const SidebarUser = () => {
  const dispatch = useDispatch();
  const { loading, GetVerify } = useSelector((s) => s.verify) // eslint-disable-line

  const pathUrl = window.location.href.split("/");

  return (
    <>
      {/* {loading ? <LoaderSiderbar /> : <> */}
      <div className="user-panel-box1 col-md-12">
        <div className="user-box1-card">
          <div className="user-box">
            <div className="user-box1-img">
              <img src={GetVerify.userImage === 'https://divedigital.id/wp-content/uploads/2021/10/1-min.png' ? GetVerify.userImage : `${process.env.REACT_APP_URL_IMG}/${GetVerify.userImage}`} alt="user" />
            </div>
            <div className="profile-details">
              <h4>@{GetVerify.username !== null ? GetVerify.username : "not_set"}</h4>
              <h2>{GetVerify.name !== null ? GetVerify.name : "NOT SET"}</h2>
              <p>
                {GetVerify.role}
                <span>
                  <img src={verif} alt="verified" />
                </span>
              </p>
              {GetVerify.isActive !== 'active' ? <Link to="">Your email isn't verified yet</Link> : <br />}
              <div className="about-me">
                <h3>About me</h3>
                <p>
                  {GetVerify.description !== null && GetVerify.description !== "null" ? GetVerify.description : "about me not set"}
                </p>
              </div>
            </div>
          </div>
          <div className="author-panel">
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

          <div className="user-profile-panel">
            {GetVerify.role === "admin" ? (<>
              <Link to="/profile">
                <div className={`user-profile-panel-list ${pathUrl[3] === "profile" && pathUrl.length === 4 ? 'active' : ''}`}>
                  PROFILE
                  <FaChevronRight className="user-profile-panel-icon" />
                </div>
              </Link>
              <Link to="/profile/post">
                <div className={`user-profile-panel-list ${pathUrl[4] === "post" ? 'active' : ''}`}>
                  Write an article
                  <FaChevronRight className="user-profile-panel-icon" />
                </div>
              </Link>
              <Link to="/profile/users">
                <div className={`user-profile-panel-list ${pathUrl[4] === "users" ? 'active' : ''}`}>
                  Manage Users
                  <FaChevronRight className="user-profile-panel-icon" />
                </div>
              </Link>
              <Link to="/profile/postrequest">
                <div className={`user-profile-panel-list ${pathUrl[4] === "postrequest" ? 'active' : ''}`}>
                  Article Request
                  <FaChevronRight className="user-profile-panel-icon" />
                </div>
              </Link>
              <Link to="/profile/writer">
                <div className={`user-profile-panel-list ${pathUrl[4] === "writer" ? 'active' : ''}`}>
                  WRITER Request
                  <FaChevronRight className="user-profile-panel-icon" />
                </div>
              </Link>
              <div className={`user-profile-panel-list`}>
                Saved Post
                <FaChevronRight className="user-profile-panel-icon" />
              </div>
            </>) : GetVerify.role === "writer" ? (<>
              <Link to="/profile">
                <div className={`user-profile-panel-list ${pathUrl[3] === "profile" && pathUrl.length === 4 ? 'active' : ''}`}>
                  PROFILE
                  <FaChevronRight className="user-profile-panel-icon" />
                </div>
              </Link>
              <Link to="/profile/post">
                <div className={`user-profile-panel-list ${pathUrl[4] === "post" ? 'active' : ''}`}>
                  Write an article
                  <FaChevronRight className="user-profile-panel-icon" />
                </div>
              </Link>
              <div className={`user-profile-panel-list`}>
                Saved Post
                <FaChevronRight className="user-profile-panel-icon" />
              </div>
              <div className={`user-profile-panel-list`}>
                F A Q
                <FaChevronRight className="user-profile-panel-icon" />
              </div>
              <div className={`user-profile-panel-list`}>
                Help
                <FaChevronRight className="user-profile-panel-icon" />
              </div>

            </>
            ) : (<>
              <Link to="/profile">
                <div className={`user-profile-panel-list ${pathUrl[3] === "profile" && pathUrl.length === 4 ? 'active' : ''}`}>
                  PROFILE
                  <FaChevronRight className="user-profile-panel-icon" />
                </div>
              </Link>
              <div className={`user-profile-panel-list`}>
                Saved Post
                <FaChevronRight className="user-profile-panel-icon" />
              </div>
              <div className={`user-profile-panel-list`}>
                F A Q
                <FaChevronRight className="user-profile-panel-icon" />
              </div>
              <div className={`user-profile-panel-list`}>
                Help
                <FaChevronRight className="user-profile-panel-icon" />
              </div>
            </>
            )}
            <div onClick={() => dispatch(AuthLogout())}
              className={`user-profile-panel-list`}
              style={{ marginTop: "50px" }}
            >
              Logout
              <FiLogOut
                className="user-profile-panel-icon"
                style={{ fontSize: "23px" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* </>} */}

    </>
  );
};

export default SidebarUser;
