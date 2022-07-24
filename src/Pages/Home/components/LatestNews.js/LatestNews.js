import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import "./mobile.scss";
import user from "../../../../assets/users/user1.jpg";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { GetNewsAction } from "../../../../Redux/actions/News";
import MyLoader from "./Loader";
import moment from "moment";

const LatestNews = () => {
  const dispatch = useDispatch();

  const { GetNews, loading } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(GetNewsAction({ limit: 5 }));
  }, [dispatch]); // eslint-disable-line
  return (
    <section className="latestNews-page">
      <h2>Latest News</h2>
      {loading ? (<>
        <div className="news-box"><MyLoader /></div><hr />
        <div className="news-box"><MyLoader /></div><hr />
        <div className="news-box"><MyLoader /></div><hr />
        <div className="news-box"><MyLoader /></div><hr />
        <div className="news-box"><MyLoader /></div><hr />
      </>) : GetNews.results.map((news, index) => {
        return (
          <>
            <div key={index}>
              <div className="news-box" >
                <div className="news-box-img" >
                  <img src={`${process.env.REACT_APP_URL_IMG}/${news.newsImage}`} alt="news" />
                </div>
                <div className="news-box-details">
                  <div className="news-box-user d-flex justify-content-between">
                    <img src={`${process.env.REACT_APP_URL_IMG}/${news.userImage}`} alt="" />
                    <Link to="/#"><p>{news.name}</p></Link>
                    <p>{moment(news.created_at).format("D MMMM YY")}</p>
                  </div>

                  <div className="news-box-info">
                    <Link to={`/newsdetails/${news.newsId}`}><h3>{news.title}</h3></Link>
                    <p>{news.categoryName}</p>
                  </div>

                  <div className="news-box-detail">
                    <p>{moment(news.created_at).startOf('minute').fromNow()}</p>
                    <span>
                      <MdOutlineBookmarkAdd className="icon" />
                    </span>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </>
        )
      })}


    </section >
  );
};

export default LatestNews;
