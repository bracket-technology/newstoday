import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar";
import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category";
import News from "./components/News/News";
import LatestNews from "./components/LatestNews.js/LatestNews";
import Metatags from "../../Components/Metatags";
import { useSearchParams } from "react-router-dom"
import { useDispatch } from "react-redux";
const { verifyEmail } = require('../../Redux/actions/Auth')

const Home = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useSearchParams() // eslint-disable-line
  if (query.get('code') !== null) {
    if (query.get('code') !== '') {
      dispatch(verifyEmail({ email: query.get('email'), code: query.get('code') }))
    }
  }
  return (
    <>
      <Metatags title={'News Today'} />
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
