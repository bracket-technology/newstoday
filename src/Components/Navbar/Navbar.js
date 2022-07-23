import React, { useState } from "react";
import "./styles.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import './mobile.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h2>
            News <span>Today</span>
          </h2>
        </div>
        <div className={toggle ? "nav-menu active" : "nav-menu"}>
          <div className="nav-links active">Home</div>
          <div className="nav-links">Article</div>
          <div className="nav-links">Category</div>
          <div className="nav-links">About</div>
          <div className="button">
            <Link to="/signup"><button>Signup</button></Link>
            <Link to="/signin"><button>Login</button></Link>
          </div>
          <p>Copyright© 2022 News Today. All right reserved.</p>
        </div>
        <div className="nav-icon" onClick={() => setToggle(!toggle)}>{toggle ? <FaTimes /> : <FaBars />}</div>
      </div>
    </nav>
  );
};

export default Navbar;
