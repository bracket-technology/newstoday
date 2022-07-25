import React, { useEffect, useState } from "react";
import Navbar from "../../../Components/Navbar";
import { FaChevronLeft } from "react-icons/fa";
import "./styles.scss";
import "./mobile.scss";
import Footer from "../../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import { useQuill } from "react-quilljs";
import SidebarUser from "../Component/SidebarUser";

const PostArticle = () => {
  const { quill, quillRef } = useQuill();
  const [content, setContent] = useState();
  console.log(content);
  // console.log(quill.root.innerHTML);

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        setContent(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill]); // eslint-disable-line

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
          <form encType="multipart/form-data">
            <div className="write-article">
              <div className="user-sidebar-panel">
                <SidebarUser />
              </div>
              <div className="article-title">
                <label htmlFor="">Article title</label>
                <br />
                <input type="text" placeholder="Article title" />
              </div>
              <div className="article-category">
                <label htmlFor="">Category</label>
                <br />
                <div className="dropdown">
                  <button className="dropdown-toggle" data-bs-toggle="dropdown">
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
              <div className="upload-panel">
                  <input className="form-control" type="file"/>
              </div>
              <div className="attachment">
                <div ref={quillRef} />
              </div>
              <div className="writer-request">
                <button>Request Publish Article</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostArticle;
