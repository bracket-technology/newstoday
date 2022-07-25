import React, { useEffect, useState } from "react";
import Navbar from "../../../Components/Navbar";
import "./styles.scss";
import "./mobile.scss";
import Footer from "../../../Components/Footer/Footer";
// import { Link } from "react-router-dom";
import { useQuill } from "react-quilljs";
import SidebarUser from "../Component/SidebarUser";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCategory } from "../../../Redux/actions/Category";
import MetaTags from "../../../Components/Metatags";
import { AddNews } from "../../../Redux/actions/News";

const PostArticle = () => {
  const dispatch = useDispatch();
  const { quill, quillRef } = useQuill();
  const [article, setArticle] = useState({});
  const { GetAuth } = useSelector((s) => s.auth);
  const { GetVerify } = useSelector((state) => state.verify);
  const { ResponseData } = useSelector((state) => state.news);
  const { GetCategory } = useSelector((state) => state.category);
  useEffect(() => {
    dispatch(GetAllCategory(GetAuth.data.token));
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        setArticle(prevData => ({ ...prevData, content: quillRef.current.firstChild.innerHTML }));
      });
    }
    setArticle({
      title: "",
      content: "",
      descriptionNews: "",
      categoryId: "",
      newsImage: "",
    })
  }, [quill, dispatch, ResponseData]); // eslint-disable-line

  const handleSubmit = (e) => {
    e.preventDefault();
    const bodyFromdata = new FormData();
    bodyFromdata.append("title", article.title);
    bodyFromdata.append("content", article.content);
    bodyFromdata.append("descriptionNews", article.descriptionNews);
    bodyFromdata.append("categoryId", article.categoryId);
    bodyFromdata.append("newsImage", article.newsImage);
    dispatch(AddNews(GetAuth.data.token, bodyFromdata));
  }

  return (
    <>
      <MetaTags title={'Post Article | News Today'} />
      <Navbar />
      <div className="container">
        <div className="post-article">
          <div className="post-article-title">
            <h1>Write an article</h1>
          </div>
          <form encType="multipart/form-data" onSubmit={(e) => handleSubmit(e)}>
            <div className="write-article">
              <div className="user-sidebar-panel">
                <SidebarUser />
              </div>
              <div className="article-title">
                <label htmlFor="">Article title</label>
                <br />
                <input type="text" placeholder="Article title" onChange={(e) => setArticle(prevState => ({ ...prevState, title: e.target.value }))} />
              </div>
              <div className="article-category">
                <label htmlFor="">Category</label>
                <br />
                <div className="category-select">
                  <select defaultValue={article.categoryId} onChange={(e) => setArticle(prevState => ({ ...prevState, categoryId: e.target.value }))} className="form-select" required>
                    <option selected>Category List</option>
                    {GetCategory.results.map((item, i) => (
                      <option key={i} value={item.categoryId} >{item.categoryName}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="description">
                <label htmlFor="">Description</label>
                <br />
                <textarea type="text" placeholder="Description" onChange={(e) => setArticle(prevState => ({ ...prevState, descriptionNews: e.target.value }))} />
              </div>
              <div className="upload-panel">
                <input className="form-control" type="file" onChange={(e) => {
                  setArticle(prevState => ({ ...prevState, newsImage: e.target.files[0] }))
                }} />
              </div>
              <div className="attachment">
                <div ref={quillRef} />
              </div>
              <div className="writer-request">
                {GetVerify.role === "admin" ? (
                  <button>Publish Article</button>
                ) : (
                  <button>Request Publish Article</button>
                )}
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
