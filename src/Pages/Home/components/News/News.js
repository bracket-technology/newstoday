import React from "react";
import "./styles.scss";
import "./mobile.scss";
import user1 from "../../../../assets/users/user1.jpg";
import { AiOutlineLike, AiOutlineClockCircle } from "react-icons/ai";
import { BsBookmarks } from "react-icons/bs";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <section className="news-page">
      <h1>What's Happening Today?</h1>
      <p className="title-tag">
        Find the latest breaking news and information on the top stories,
        weather, business, entertainment, politics, and more. Everyone has their
        point of view of something, but just don’t be afraid to express the
        facts. Be an author and share you prespective of something to the world.
      </p>
      <h2>
        Recommended On News <span>Today</span>
      </h2>
      <div className="recommended">
        <div className="r-box">
          <div className="img-box">
            <img src={user1} alt="" />
            <div className="info d-flex">
              <Link to="/profile">
                <p>John Doe</p>
              </Link>
              <p>20 Jun 2022</p>
            </div>
          </div>
          <hr />
          <div className="news-detail">
            <Link to="./newsdetails">
              <h4>We’re Not Going to Make it to 2050</h4>
            </Link>
            <p>Why corona never ends? Let’s see how its facts</p>
            <div className="icon-list">
              <AiOutlineLike className="icon" />
              <span>2.5k</span>
              <AiOutlineClockCircle className="icon" />
              <span>3 min ago</span>
              <BsBookmarks className="icon" />
            </div>
          </div>
        </div>
        <div className="r-box">
          <div className="img-box">
            <img src={user1} alt="" />
            <div className="info d-flex">
              <Link to="/profile">
                <p>John Doe</p>
              </Link>
              <p>20 Jun 2022</p>
            </div>
          </div>
          <hr />
          <div className="news-detail">
            <Link to="./newsdetails">
              <h4>We’re Not Going to Make it to 2050</h4>
            </Link>
            <p>Why corona never ends? Let’s see how its facts</p>
            <div className="icon-list">
              <AiOutlineLike className="icon" />
              <span>2.5k</span>
              <AiOutlineClockCircle className="icon" />
              <span>3 min ago</span>
              <BsBookmarks className="icon" />
            </div>
          </div>
        </div>
        <div className="r-box">
          <div className="img-box">
            <img src={user1} alt="" />
            <div className="info d-flex">
              <Link to="/profile">
                <p>John Doe</p>
              </Link>
              <p>20 Jun 2022</p>
            </div>
          </div>
          <hr />
          <div className="news-detail">
            <Link to="./newsdetails">
              <h4>We’re Not Going to Make it to 2050</h4>
            </Link>
            <p>Why corona never ends? Let’s see how its facts</p>
            <div className="icon-list">
              <AiOutlineLike className="icon" />
              <span>2.5k</span>
              <AiOutlineClockCircle className="icon" />
              <span>3 min ago</span>
              <BsBookmarks className="icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
