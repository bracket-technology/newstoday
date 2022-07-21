import React from "react";
import "./styles.scss";
import "./mobile.scss"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="main-footer container">
        <div className="footer-content col-md-4">
          <h2 style={{fontSize: '35px'}}>
            News <span>Today</span>
          </h2>
          <p>
            Jendral Sudirman Street No. <br />
            23 Jakarta, Indonesia
          </p>
          <p>(621)989898934</p>
          <p>newstoday@mail.com</p>
        </div>
        <div className="footer-content col-md-4">
          <h2>Menu</h2>
          <Link to="/"><p>Home</p></Link>
          <hr />
          <Link to="/"><p>Article</p></Link>
          <hr />
          <Link to="/"><p>Category</p></Link>
          <hr />
          <Link to="/"><p>About</p></Link>
          <hr />
        </div>
        <div className="footer-content col-md-4">
          <h2>Content</h2>
          <Link to="/"><p>Why news today</p></Link>
          <hr />
          <Link to="/"><p>Be an author</p></Link>
          <hr />
          <Link to="/"><p>Community</p></Link>
          <hr />
          <Link to="/"><p>FAQ</p></Link>
          <hr />
        </div>
      </div>
        <p className="footer-copyright container">
          Copyright© 2022 News Today. All right reserved.
        </p>
    </footer>
  );
};

export default Footer;
