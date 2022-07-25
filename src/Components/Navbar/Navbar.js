import React, { useState } from "react";
import "./styles.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import "./mobile.scss";
import { Link } from "react-router-dom";

const Navbar = ({ isDark }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {isDark ? (
        <nav className="navbar-dark">
          <div className="container nav">
            <div className="logo">
              <Link to="/">
                <h2>
                  News <span>Today</span>
                </h2>
              </Link>
            </div>
            <div className={toggle ? "nav-menu active" : "nav-menu"}>
              <div className="nav-links active"><Link to="/">Home</Link></div>
              <div className="nav-links"><Link to="/article">Article</Link></div>
              <div className="nav-links"><Link to="/">Category</Link></div>
              <div className="nav-links"><Link to="/">About</Link></div>
              <div className="button">
                <Link to="/signup">
                  <button>Signup</button>
                </Link>
                <Link to="/signin">
                  <button>Login</button>
                </Link>
              </div>
              <p>Copyright© 2022 News Today. All right reserved.</p>
            </div>
            <div className="nav-icon" onClick={() => setToggle(!toggle)}>
              {toggle ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar">
          <div className="container">
            <div className="logo">
              <Link to="/">
                <h2>
                  News <span>Today</span>
                </h2>
              </Link>
            </div>
            <div className={toggle ? "nav-menu active" : "nav-menu"}>
                <div className="nav-links active"><Link to="/">Home</Link></div>
              <div className="nav-links"><Link to="/article">Article</Link></div>
              <div className="nav-links"><Link to="/">Category</Link></div>
              <div className="nav-links"><Link to="/">About</Link></div>
              <div className="button">
                <Link to="/signup">
                  <button>Signup</button>
                </Link>
                <Link to="/signin">
                  <button>Login</button>
                </Link>
              </div>
              <p>Copyright© 2022 News Today. All right reserved.</p>
            </div>
            <div className="nav-icon" onClick={() => setToggle(!toggle)}>
              {toggle ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
