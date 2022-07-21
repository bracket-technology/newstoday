import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category";
import News from "./components/News/News";
import "./styles.scss";
import GetStarted from "./components/GetStarted/GetStarted";
import LatestNews from "./components/LatestNews.js/LatestNews";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="content-center">
        <div className="container d-flex">
          <Category />
          <div className="content-center-container">
            <News />
            <LatestNews />
          </div>
        </div>
      </div>
      <GetStarted />
      <Footer />
    </>
  );
};

export default Home;
