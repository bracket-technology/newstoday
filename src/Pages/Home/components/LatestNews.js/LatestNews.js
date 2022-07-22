import React from "react";
import "./styles.scss";
import "./mobile.scss";
import n1 from "../../../../assets/news/n1.jpg";
import n2 from "../../../../assets/news/n4.jpg";
import n3 from "../../../../assets/news/n3.jpg";
import user from "../../../../assets/users/user1.jpg";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <section className="latestNews-page">
      <h2>Latest News</h2>
      <div className="news-box">
        <div className="news-box-img">
          <img src={n1} alt="news" />
        </div>
        <div className="news-box-details">
          <div className="news-box-user d-flex justify-content-between">
            <img src={user} alt="" />
            <Link to="/profile"><p>Robert Downey Jr</p></Link>
            <p>22 August 2022</p>
          </div>

          <div className="news-box-info">
            <Link to="/newsdetails"><h3>A World Without Interest Is Not Only Possible but Wildly Preferable</h3></Link>
            <p>It’s time to stop rewarding bankers for looting civilization</p>
          </div>

          <div className="news-box-detail">
            <p>10 min ago</p>
            <span>
              <MdOutlineBookmarkAdd className="icon" />
            </span>
          </div>
        </div>
      </div>
      <hr />
      <div className="news-box">
        <div className="news-box-img">
          <img src={n3} alt="news" />
        </div>
        <div className="news-box-details">
          <div className="news-box-user d-flex justify-content-between">
            <img src={user} alt="" />
            <Link to="/profile"><p>Robert Downey Jr</p></Link>
            <p>22 August 2022</p>
          </div>

          <div className="news-box-info">
            <Link to="/newsdetails"><h3>A World Without Interest Is Not Only Possible but Wildly Preferable</h3></Link>
            <p>It’s time to stop rewarding bankers for looting civilization</p>
          </div>

          <div className="news-box-detail">
            <p>10 min ago</p>
            <span>
              <MdOutlineBookmarkAdd className="icon" />
            </span>
          </div>
        </div>
      </div>
      <hr />
      <div className="news-box">
        <div className="news-box-img">
          <img src={n2} alt="news" />
        </div>
        <div className="news-box-details">
          <div className="news-box-user d-flex justify-content-between">
            <img src={user} alt="" />
            <Link to="/profile"><p>Robert Downey Jr</p></Link>
            <p>22 August 2022</p>
          </div>

          <div className="news-box-info">
            <Link to="/newsdetails"><h3>A World Without Interest Is Not Only Possible but Wildly Preferable</h3></Link>
            <p>It’s time to stop rewarding bankers for looting civilization</p>
          </div>

          <div className="news-box-detail">
            <p>10 min ago</p>
            <span>
              <MdOutlineBookmarkAdd className="icon" />
            </span>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default LatestNews;
