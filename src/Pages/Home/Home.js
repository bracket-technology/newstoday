import React from "react";
import "./styles.scss";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category";
import News from "./components/News/News";
import LatestNews from "./components/LatestNews.js/LatestNews";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <Category />
          </div>
          <div className="col-md-10">
            <News />
            <LatestNews />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
