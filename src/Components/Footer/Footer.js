import React from "react";
import "./styles.scss";
import "./mobile.scss"

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
          <hr />
          <p>(621)989898934</p>
          <hr />
          <p>newstoday@mail.com</p>
          <hr />
        </div>
        <div className="footer-content col-md-4">
          <h2>Menu</h2>
          <p>Home</p>
          <hr />
          <p>Article</p>
          <hr />
          <p>Category</p>
          <hr />
          <p>About</p>
          <hr />
        </div>
        <div className="footer-content col-md-4">
          <h2>Content</h2>
          <p>Why news today</p>
          <hr />
          <p>Be an author</p>
          <hr />
          <p>Community</p>
          <hr />
          <p>FAQ</p>
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
