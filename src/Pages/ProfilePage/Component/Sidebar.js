import React from 'react'
import verif from "../../../assets/icons/checked.svg";
import { FiLogOut } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";
import avatar from "../../../assets/users/user3.jpg";


const Sidebar = () => {
    return (
        <div className="user-box1 col-md-4">
            <h2>Profile</h2>
            <div className="user-box1-card">
                <div className="user-box">
                    <div className="user-box1-img">
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

                <div className="user-profile-panel">
                    <div className="user-profile-panel-list active">
                        Manage user
                        <FaChevronRight className="user-profile-panel-icon" />
                    </div>
                    <div className="user-profile-panel-list">
                        Saved Post
                        <FaChevronRight className="user-profile-panel-icon" />
                    </div>
                    <div className="user-profile-panel-list">
                        F A Q
                        <FaChevronRight className="user-profile-panel-icon" />
                    </div>
                    <div className="user-profile-panel-list">
                        Help
                        <FaChevronRight className="user-profile-panel-icon" />
                    </div>
                    <div
                        className="user-profile-panel-list"
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
    )
}

export default Sidebar