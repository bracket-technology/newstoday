import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./styles.scss";
import "./mobile.scss";
import { Link } from "react-router-dom";
import { FiTrash } from "react-icons/fi";

const Category = () => {
  return (
    <>
      <Navbar />
      <div className="category-page">
        <div className="cat1">
          <div className="cat-info">
            <Link to="/#">Politics</Link>
          </div>
        </div>
        <div className="cat2">
          <div className="cat-info">
            <Link to="/#">Health</Link>
          </div>
        </div>
        <div className="cat3">
          <div className="cat-info">
            <Link to="/#">Business</Link>
          </div>
        </div>
        <div className="cat4">
          <div className="cat-info">
            <Link to="/#">Sports</Link>
          </div>
        </div>
        <div className="cat5">
          <div className="cat-info">
            <Link to="/#">Economy</Link>
          </div>
        </div>
        <div className="cat6">
          <div className="cat-info">
            <Link to="/#">Technology</Link>
          </div>
        </div>
        <div className="cat7">
          <div className="cat-info">
            <Link to="/#">Entertainment</Link>
          </div>
        </div>
        <div className="cat8">
          <div className="cat-info">
            <Link to="/#">Crime</Link>
          </div>
        </div>
        <div className="cat9">
          <div className="cat-info">
            <Link to="/#">Fashion</Link>
          </div>
        </div>
        <div className="cat10">
          <div className="cat-info">
            <Link to="/#">Food</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
