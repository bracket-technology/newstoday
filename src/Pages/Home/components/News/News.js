import React from "react";
import "./styles.scss";
import user1 from "../../../../assets/users/user1.jpg";
import { AiOutlineLike, AiOutlineClockCircle } from "react-icons/ai";

const News = () => {
  return (
    <section className="news-page">
      <h1>What's Happening Today?</h1>
      <h2>Recommended On News Today</h2>
      <div className="recommended">
      <div className="r-box">
          <div className="img-box">
            <img src={user1} alt="" />
            <p>John Doe</p>
          </div>
          <div className="news-detail">
            <h4>We’re Not Going to Make it to 2050</h4>
            <p>Why corona never ends? Let’s see how its facts</p>
            <div className="icon-list">
              <AiOutlineLike className="icon"/>
              <span>2.5k</span>
             <span><AiOutlineClockCircle className="icon2"/>3 min ago</span>
            </div>
          </div>
        </div>
        <div className="r-box">
          <div className="img-box">
            <img src={user1} alt="" />
            <p>John Doe</p>
          </div>
          <div className="news-detail">
            <h4>We’re Not Going to Make it to 2050</h4>
            <p>Why corona never ends? Let’s see how its facts</p>
            <div className="icon-list">
              <AiOutlineLike className="icon"/>
              <span>2.5k</span>
            </div>
          </div>
        </div>
        <div className="r-box">
          <div className="img-box">
            <img src={user1} alt="" />
            <p>John Doe</p>
          </div>
          <div className="news-detail">
            <h4>We’re Not Going to Make it to 2050</h4>
            <p>Why corona never ends? Let’s see how its facts</p>
            <div className="icon-list">
              <AiOutlineLike className="icon"/>
              <span>2.5k</span>
            </div>
          </div>
        </div>
        <div className="r-box">
          <div className="img-box">
            <img src={user1} alt="" />
            <p>John Doe</p>
          </div>
          <div className="news-detail">
            <h4>We’re Not Going to Make it to 2050</h4>
            <p>Why corona never ends? Let’s see how its facts</p>
            <div className="icon-list">
              <AiOutlineLike className="icon"/>
              <span>2.5k</span>
            </div>
          </div>
        </div>
        <div className="r-box">
          <div className="img-box">
            <img src={user1} alt="" />
            <p>John Doe</p>
          </div>
          <div className="news-detail">
            <h4>We’re Not Going to Make it to 2050</h4>
            <p>Why corona never ends? Let’s see how its facts</p>
            <div className="icon-list">
              <AiOutlineLike className="icon"/>
              <span>2.5k</span>
            </div>
          </div>
        </div>
        <div className="r-box">
          <div className="img-box">
            <img src={user1} alt="" />
            <p>John Doe</p>
          </div>
          <div className="news-detail">
            <h4>We’re Not Going to Make it to 2050</h4>
            <p>Why corona never ends? Let’s see how its facts</p>
            <div className="icon-list">
              <AiOutlineLike className="icon"/>
              <span>2.5k</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
