import React from "react";
import "./styles.scss";
import "./mobile.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from '../../Components/Footer/Footer'
import h1 from "../../assets/news/k1.jpg";
import h2 from "../../assets/news/n2.jpg";
import h3 from "../../assets/news/n3.jpg";
import { Link } from "react-router-dom";

const Article = () => {
  return (
    <>
      <Navbar />
      <div className="article-page">
        <div className="article-header container">
          <div className="header-content">
            <img src={h1} alt="" />
            {/* <div className="header1-content-info">
              <h1>
                Shinzo Abe’s Murder, Neighbors Reveal the Attitude of Shooters
              </h1>
            </div> */}
          </div>
            
          <div className="article-card">
            <div className="card-layout-1">
              <div className="card-layout-1-box">
                <img src={h2} alt="" />
              </div>
              <div className="card-layout-1-content">
                <Link to="/#">
                  <h2>
                    The Dangers Of Spyware Hermit Snoops That You Should Know
                  </h2>
                </Link>
              </div>
            </div>
            <div className="card-layout-2">
              <div className="card-layout-2-box">
                <img src={h2} alt="" />
              </div>
              <div className="card-layout-2-content">
                <Link to="/#">
                  <h2>
                    The Dangers Of Spyware Hermit Snoops That You Should Know
                  </h2>
                </Link>
              </div>
            </div>
            <div className="card-layout-3">
              <div className="card-layout-3-box">
                <img src={h2} alt="" />
              </div>
              <div className="card-layout-3-content">
                <Link to="/#">
                  <h2>
                    The Dangers Of Spyware Hermit Snoops That You Should Know
                  </h2>
                </Link>
              </div>
            </div>
            <div className="card-layout-4">
              <div className="card-layout-4-box">
                <img src={h3} alt="" />
              </div>
              <div className="card-layout-4-content">
                <Link to="/#">
                  <h2>
                    The Dangers Of Spyware Hermit Snoops That You Should Know
                  </h2>
                </Link>
              </div>
            </div>
            <div className="card-layout-5">
              <div className="card-layout-5-box">
                <img src={h3} alt="" />
              </div>
              <div className="card-layout-5-content">
                <Link to="/#"><h3>The Dangers Of Spyware Hermit Snoops That You Should Know</h3></Link>
                <p>Advanced spyware campaigns are getting help from internet service providers.</p>
                <span>Healthy</span>
              </div>
            </div>
            <div className="card-layout-6">
              <div className="card-layout-6-box">
                <img src={h3} alt="" />
              </div>
              <div className="card-layout-6-content">
                <Link to="/#">
                  <h2>
                    The Dangers Of Spyware Hermit Snoops That You Should Know
                  </h2>
                </Link>
              </div>
            </div>
            <div className="card-layout-7">
              <div className="card-layout-7-box">
                <img src={h3} alt="" />
              </div>
              <div className="card-layout-7-content">
                <Link to="/#">
                  <h2>
                    The Dangers Of Spyware Hermit Snoops That You Should Know
                  </h2>
                </Link>
              </div>
            </div>
            <div className="card-layout-8">
              <div className="card-layout-8-box">
                <img src={h3} alt="" />
              </div>
              <div className="card-layout-8-content">
                <Link to="/#">
                  <h2>
                    The Dangers Of Spyware Hermit Snoops That You Should Know
                  </h2>
                </Link>
              </div>
            </div>
            <div className="card-layout-9">
            <div className="card-layout-9-box">
                <img src={h1} alt="" />
              </div>
              <div className="card-layout-9-content">
                <Link to="/#"><h3>The Dangers Of Spyware Hermit Snoops That You Should Know</h3></Link>
                <p>Advanced spyware campaigns are getting help from internet service providers.</p>
                <span>Healthy</span>
              </div>
            </div>
            <div className="card-layout-10">
              <div className="card-layout-10-box">
                <img src={h3} alt="" />
              </div>
              <div className="card-layout-10-content">
                <Link to="/#">
                  <h2>
                    The Dangers Of Spyware Hermit Snoops That You Should Know
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Article;
