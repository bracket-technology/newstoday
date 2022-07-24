import React from "react";
import Navbar from "../../../Components/Navbar";
import { FaChevronLeft } from "react-icons/fa";
import "./styles.scss";
import "./mobile.scss";
import Footer from "../../../Components/Footer/Footer";
import { Link } from "react-router-dom";

const PostArticle = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="post-article">
          <div className="post-article-header">
            <FaChevronLeft className="post-icon" />
            <Link to="/profile">Back</Link>
          </div>
          <div className="post-article-title">
            <h1>Write an article</h1>
          </div>

          <div className="write-article">
            <div className="upload-panel">Upload here</div>
            <div className="article-title">
              <label htmlFor="">Article title</label>
              <br />
              <input type="text" placeholder="Article title" />
            </div>
            <div className="article-category">
              <label htmlFor="">Category</label>
              <br />
              <div class="dropdown">
                <button class="dropdown-toggle" data-bs-toggle="dropdown">
                  Article Category
                </button>
                <ul class="dropdown-menu">
                  <li className="dropdown-item">Economy</li>
                  <li className="dropdown-item">Technology</li>
                  <li className="dropdown-item">Entertainment</li>
                </ul>
              </div>
            </div>
            <div className="description">
              <label htmlFor="">Description</label>
              <br />
              <textarea type="text" placeholder="Description" />
            </div>
            <div className="attachment">Attachment here</div>
            <div className="writer-upload">
              <button>Choose cover photo</button>
            </div>
            <div className="writer-request">
              <button>Request Publish Article</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostArticle;
