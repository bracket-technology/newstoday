import React, { useEffect } from "react";
import "./styles.scss";
import "./mobile.scss";
import Navbar from "../../Components/Navbar/";
import Footer from "../../Components/Footer/Footer";
import h1 from "../../assets/news/n4.jpg";
import h2 from "../../assets/news/n2.jpg";
import h3 from "../../assets/news/n3.jpg";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FiChevronsRight, FiSearch } from "react-icons/fi";
import { GetNewsAction } from "../../Redux/actions/News";
import MetaTags from "../../Components/Metatags";
const { useSelector, useDispatch } = require("react-redux");

const Article = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const dispatch = useDispatch();

  const { GetNews } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(GetNewsAction({ limit: 4, orderBy: 'desc' }));
  }, [dispatch]); // eslint-disable-line

  return (
    <>
      <MetaTags title={'Article'} />
      <Navbar />
      <div className="article-page">
        <div className="article-search container">
          <div className="article-search-bar">
            <input type="text" placeholder="Search..." />
            <FiSearch className="search-icon" />
          </div>
          <div className="dropdown">
            <button className="dropdown-toggle" data-bs-toggle="dropdown">
              Order By
            </button>
            <ul className="dropdown-menu">
              <li className="dropdown-item">ASC</li>
              <li className="dropdown-item">DESC</li>
            </ul>
          </div>
        </div>
        <div className="article-header container">
          <Slider {...settings}>
            <div className="header-content">
              <img src={h1} alt="news" />
            </div>
            <div className="header-content">
              <img src={h2} alt="news" />
            </div>
          </Slider>

          <div className="article-card">
            <div className="card-tag1">
              <h4>Today's Popular</h4>
              <div className="see-more">
                <Link to="/#">See more</Link>
                <FiChevronsRight className="see-more-icon" />
              </div>
            </div>
            <div className="card-tag2">
              <h4>Entertainment</h4>
              <div className="see-more">
                <Link to="/#">See more</Link>
                <FiChevronsRight className="see-more-icon" />
              </div>
            </div>
            <div className="card-tag3">
              <h4>Sports</h4>
              <div className="see-more">
                <Link to="/#">See more</Link>
                <FiChevronsRight className="see-more-icon" />
              </div>
            </div>
            {GetNews.results.map((news, index) => {
              return (
                <div className={`card-layout-${index + 1}`} key={index}>
                  <div className={`card-layout-${index + 1}-box`}>
                    <img src={`${process.env.REACT_APP_URL_IMG}/${news.newsImage}`} alt="news" />
                  </div>
                  <div className={`card-layout-${index + 1}-content`}>
                    <Link to={`/newsdetails/${news.newsId}`}>
                      <h2>
                        {news.title}
                      </h2>
                    </Link>
                  </div>
                </div>
              )
            })}
            <div className="card-layout-5">
              <div className="card-layout-5-box">
                <img src={h3} alt="" />
              </div>
              <div className="card-layout-5-content">
                <Link to="/#">
                  <h3>
                    The Dangers Of Spyware Hermit Snoops That You Should Know
                  </h3>
                </Link>
                <p>
                  Advanced spyware campaigns are getting help from internet
                  service providers.
                </p>
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
                <Link to="/#">
                  <h3>
                    The Dangers Of Spyware Hermit Snoops That You Should Know
                  </h3>
                </Link>
                <p>
                  Advanced spyware campaigns are getting help from internet
                  service providers.
                </p>
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
