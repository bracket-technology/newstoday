import React, { useState } from "react";
import "./styles.scss";
import "./mobile.scss";
import Navbar from "../../Components/Navbar";
import { FiChevronsRight } from "react-icons/fi";
import banner from "../../assets/news/n7.jpg";
import Footer from "../../Components/Footer/Footer";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";
import facebook from "../../assets/icons/facebook.svg";
import hyperlink from "../../assets/icons/hyperlink.svg";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { AiOutlineComment } from "react-icons/ai";
import ava1 from "../../assets/users/user2.jpg";

const NewsDetails = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
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
              Samsung's New AI-Powered Photo Editing App Will Fix Your Blurry
              Images and More
            </h1>
            <p>
              Samsung's free Galaxy Enhance-X app will upscale your photos and
              can remove unwanted blur and reflections.
            </p>
            <div className="author">
              <div className="published">
                <p>
                  <span>By</span>
                  <Link to="/profile">Robert Downey Jr</Link>
                </p>
                <p>
                  <span>Published</span>5 days ago
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
              <img src={banner} alt="" />
            </div>
            <div className="header-status">
              <BiLike className="header-status-icon" />
              <span>3.5k</span>
              <AiOutlineComment className="header-status-icon" />
              <span>2 Comment</span>
              <MdOutlineBookmarkAdd className="header-status-icon" />
            </div>
            <div className="news-content-main">
              <p>
                <span>S</span>amsung has introduced a new artificial
                intelligence-based photo editing app designed to clean up your
                images with just one tap. Galaxy Enhance-X is built for Galaxy
                phones running Android 10 or later, which includes the Galaxy S9
                up to the S22 as well as several mid-range models in the Galaxy
                A-series, among others. It's available to download for free now.
              </p>
              <h4>What Is Samsung Galaxy Enhance-X?</h4>
              <p>
                Galaxy Enhance-X was actually launched in early July, as
                reported by SamMobile, yet has gone largely unnoticed by most
                users. You can download the app through the Galaxy Store in the
                US. It's rolling out in other countries as well, although at the
                time of writing was not available everywhere. If it isn't
                available where you are, you can try it out by sideloading the
                version available at APKMirror, as long as you have a compatible
                phone. APKMIrror is our top pick for safe places to download APK
                files.
              </p>
              <p>
                Enhance-X uses what's described as "AI-based techniques" to fix
                and clean up your images. It offers several basic photo editing
                tools, such as those for adjusting the brightness or applying
                HDR effects. But there are also a few things that you'd normally
                only expect to find in more pro-level editing apps like
                Lightroom. These include:
              </p>
              <p>
                The app can also enlarge your photos by two or three times—this
                is one of the most common uses of AI in photo editing apps,
                although the results can sometimes vary wildly in quality. Not
                that that matters too much, as the app saves the edited photo as
                a copy, so you always have the original to fall back on if you
                aren't happy with the results. Samsung's Galaxy Enhance-X looks
                like another solid addition to the already impressive suite of
                camera and photo editing tools the company provides for its
                phones, tools that help it keep up with the likes of Apple and
                Google in the photography stakes. The phones have been able to
                shoot and edit RAW images for a while now, and have also picked
                up the clever new Object Eraser tool that cleanly removes
                unwanted objects or people from your photos.
              </p>
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
      <Footer />
    </>
  );
};

export default NewsDetails;
