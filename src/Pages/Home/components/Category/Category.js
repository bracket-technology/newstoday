import React from "react";
import "./styles.scss";
import './mobile.scss'
import { FaBuilding, FaTshirt } from "react-icons/fa";
import { MdHealthAndSafety, MdSportsSoccer } from "react-icons/md";
import { RiMoneyEuroCircleFill } from "react-icons/ri";
import { BsPhone } from "react-icons/bs";

const Category = () => {
  return (
    <>
      <section className="category-page">
        <div className="container">
          <div className="category">
            <h4>Categories</h4>
            <ul>
              <li>
                <FaBuilding className="icon" />
                <span>Government</span>
              </li>
              <li>
                <MdHealthAndSafety className="icon" />
                <span>Health</span>
              </li>
              <li>
                <RiMoneyEuroCircleFill className="icon" />
                <span>Economy</span>
              </li>
              <li>
                <BsPhone className="icon" />
                <span>Technology</span>
              </li>
              <li>
                <MdSportsSoccer className="icon" />
                <span>Sports</span>
              </li>
              <li>
                <FaTshirt className="icon" />
                <span>Fashion</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
