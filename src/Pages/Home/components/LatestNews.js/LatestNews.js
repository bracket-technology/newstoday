import React from "react";
import "./styles.scss";
import n1 from "../../../../assets/news/n1.jpg";
import n2 from "../../../../assets/news/n4.jpg";
import n3 from "../../../../assets/news/n3.jpg";
import user from "../../../../assets/users/user1.jpg";
import { MdOutlineBookmarkAdd } from "react-icons/md";

const LatestNews = () => {
  return (
    <section className="latestNews-page">
      <h2>Latest News</h2>
      <div className="news-box">
        <div className="news-box-img">
          <img src={n1} alt="news" />
        </div>
        <div className="news-box-details">
          <div className="news-box-user">
            <img src={user} alt="" />
            <p>Robert Downey Jr</p>
          </div>

          <div className="news-box-info">
            <h3>
              A World Without Interest Is Not Only Possible but Wildly
              Preferable
            </h3>
            <p>It’s time to stop rewarding bankers for looting civilization</p>
          </div>

          <div className="news-box-detail">
            <p>22 August 2022</p>
            <p>10 min ago</p>
          </div>
          <span>
            <MdOutlineBookmarkAdd className="icon"/>
          </span>
        </div>
      </div>
      <hr />
      <div className="news-box">
        <div className="news-box-img">
          <img src={n3} alt="news" />
        </div>
        <div className="news-box-details">
          <div className="news-box-user">
            <img src={user} alt="" />
            <p>Robert Downey Jr</p>
          </div>

          <div className="news-box-info">
            <h3>
              A World Without Interest Is Not Only Possible but Wildly
              Preferable
            </h3>
            <p>It’s time to stop rewarding bankers for looting civilization</p>
          </div>

          <div className="news-box-detail">
            <p>22 August 2022</p>
            <p>10 min ago</p>
          </div>
          <span>
            <MdOutlineBookmarkAdd className="icon"/>
          </span>
        </div>
      </div>
      <hr />
      <div className="news-box">
        <div className="news-box-img">
          <img src={n2} alt="news" />
        </div>
        <div className="news-box-details">
          <div className="news-box-user">
            <img src={user} alt="" />
            <p>Robert Downey Jr</p>
          </div>

          <div className="news-box-info">
            <h3>
              A World Without Interest Is Not Only Possible but Wildly
              Preferable
            </h3>
            <p>It’s time to stop rewarding bankers for looting civilization</p>
          </div>

          <div className="news-box-detail">
            <p>22 August 2022</p>
            <p>10 min ago</p>
          </div>
          <span>
            <MdOutlineBookmarkAdd className="icon"/>
          </span>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
