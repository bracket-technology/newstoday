import React from "react";
import "./styles.scss";
import "./mobile.scss";
import { Link } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai";

const Banner = () => {
  return (
    <>
      <section className="banner-page">
        <div className="banner container">
          <div className="banner-content">
            <div className="news1">
              <div className="news1-box">
                <div className="title">
                  <span>Trending</span>
                  <Link to="/newsdetails">
                    <h2>Shinzo Abe’s Murder, Neighbors Reveal</h2>
                  </Link>
                  <p>
                  The Japanese police have arrested the perpetrator of the shooting of former Japanese Prime Minister.
                  </p>
                  <Link to="/newsdetails">
                    <button>
                      Read More
                      <AiOutlineDoubleRight className="icon" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="news2">
              <div className="news2-box">
                <div className="title">
                  <span>Trending</span>
                  <Link to="/newsdetails">
                    <h2>President Election</h2>
                  </Link>
                  <p>Why corona never ends? Let’s see how its facts</p>
                </div>
              </div>
            </div>
            <div className="news3">
              <div className="news3-box">
                <div className="title">
                  <span>Trending</span>
                  <Link to="/newsdetails">
                    <h2>Technology: What’s new?</h2>
                  </Link>
                  <p>
                    Apple is expected to start rolling out iOS 16 to all the
                    compatible iPhones in September.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
