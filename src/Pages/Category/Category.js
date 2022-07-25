import React from "react";
import Navbar from "../../Components/Navbar/";
import cat from '../../assets/news/n1.jpg'
import './styles.scss'
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <>
      <Navbar />
      <div className="category-page container">
        <div className="row">
          <div className="col-md-4">
            <div className="cat-1">
              <img src={cat} alt="cat" />
              <Link to="/#"><div className="box">Government</div></Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cat-1">
              <img src={cat} alt="cat" />
              <Link to="/#"><div className="box">Government</div></Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cat-1">
              <img src={cat} alt="cat" />
              <Link to="/#"><div className="box">Government</div></Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="cat-1">
              <img src={cat} alt="cat" />
              <Link to="/#"><div className="box">Government</div></Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cat-1">
              <img src={cat} alt="cat" />
              <Link to="/#"><div className="box">Government</div></Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cat-1">
              <img src={cat} alt="cat" />
              <Link to="/#"><div className="box">Government</div></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
