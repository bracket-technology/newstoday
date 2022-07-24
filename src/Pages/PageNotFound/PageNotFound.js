import React from "react";
import "./styles.scss";
import "./mobile.scss";
import pagenotfound from "../../assets/404page/404.svg";
import Footer from "../../Components/Footer/Footer";

const PageNotFound = () => {
  return (
    <>
      <div className="container">
        <div className="pagenotfound">
          <div className="pagenotfound-header">
            <img src={pagenotfound} alt="" />
          </div>
          <div className="pagenotfound-info">
            <h1>404 ERROR <br />Page Not Found</h1>
            <h2>The page you requested could not be found</h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PageNotFound;
