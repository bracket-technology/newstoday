import React, { useEffect, useState } from "react";
import "./styles.scss";
import "./mobile.scss";
import Navbar from "../../Components/Navbar";
import { FiChevronsRight } from "react-icons/fi";
import banner from "../../assets/news/n7.jpg";
import Footer from "../../Components/Footer/Footer";
import { FiSend } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import facebook from "../../assets/icons/facebook.svg";
import hyperlink from "../../assets/icons/hyperlink.svg";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { AiOutlineComment } from "react-icons/ai";
import ava1 from "../../assets/users/user2.jpg";
import { NewsById } from "../../Redux/actions/News";
import moment from "moment";

const NewsDetails = () => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  let { categoryId } = useParams();

  const { loading, ResponseData } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(NewsById(categoryId))
  }, [dispatch])
  return (
    <>
      {loading ? '' : (<>
        <Navbar isDark={true} />
        <div className="blank"></div>
        <div className="container">
          <section className="newsDetails">
            <div className="direct">
              <Link to="/">
                <span>Home</span>
              </Link>
              <FiChevronsRight className="direct-icon" />
              <span>News</span>
              <FiChevronsRight className="direct-icon" />
              <span>Technology</span>
            </div>
            <div className="newsDetails-header">
              <h1>
                {ResponseData.title}
              </h1>
              <p>
                {ResponseData.descriptionNews}
              </p>
              <div className="author">
                <div className="published">
                  <p>
                    <span>By</span>
                    <Link to="/profile">{ResponseData.name}</Link>
                  </p>
                  <p>
                    <span>Published</span>{moment(ResponseData.created_at).startOf("minute").fromNow()}
                  </p>
                </div>
                <div className="shared">
                  <FiSend
                    className="shared-icon"
                    onClick={() => setToggle(!toggle)}
                  />
                  <div className={toggle ? "shared-box active" : "shared-box"}>
                    <div className="shared-box-details">
                      <img src={hyperlink} alt="link" />
                      <Link to="/">
                        <p>Copy URL Link</p>
                      </Link>
                    </div>
                    <hr />
                    <div className="shared-box-details">
                      <img src={facebook} alt="facebook" />
                      <Link to="/">
                        <p>Shared on Facebook</p>
                      </Link>
                    </div>
                    <hr />
                    <div className="shared-box-details">
                      <img src={twitter} alt="instagram" />
                      <Link to="/">
                        <p>Shared on Twitter</p>
                      </Link>
                    </div>
                    <hr />
                    <div className="shared-box-details">
                      <img src={instagram} alt="instagram" />
                      <Link to="/">
                        <p>Shared on Instagram</p>
                      </Link>
                    </div>
                    <hr />
                    <div className="shared-box-details">
                      <img src={whatsapp} alt="whatsapp" />
                      <Link to="/">
                        <p>Shared on Whatsapp</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-img-box">
                <img src={`${process.env.REACT_APP_URL_IMG}/${ResponseData.newsImage}`} alt={ResponseData.userImage} />
              </div>
              <div className="header-status">
                <BiLike className="header-status-icon" />
                <span>3.5k</span>
                <AiOutlineComment className="header-status-icon" />
                <span>2 Comment</span>
                <MdOutlineBookmarkAdd className="header-status-icon" />
              </div>
              <div className="news-content-main">
                {(ResponseData.content)}
              </div>
              <div className="comment-section" id="comment-section">
                <div className="comment-section-title">
                  <AiOutlineComment className="comment-section-icon" />
                  <h2>2 Comments</h2>
                </div>
                <div className="comment-user">
                  <div className="comment-user-details">
                    <img src={ava1} alt="avatar" />
                    <div className="comment-user-area">
                      <p>You</p>
                      <form action="">
                        <textarea type="text" placeholder="Leave a comment..." />
                        <button>Submit</button>
                      </form>
                    </div>
                  </div>
                  <hr />
                  <div className="comment-user-details">
                    <img src={ava1} alt="avatar" />
                    <div className="comment-user-area">
                      <p>Kendall Jenner • <span>3 min ago</span></p>
                      <h4>Excellent work!</h4>
                    </div>
                  </div>
                  <hr />
                  <div className="comment-user-details">
                    <img src={ava1} alt="avatar" />
                    <div className="comment-user-area">
                      <p>Kendall Jenner • <span>3 min ago</span></p>
                      <h4>Excellent work!</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>)}
      <Footer />
    </>
  );
};

export default NewsDetails;
