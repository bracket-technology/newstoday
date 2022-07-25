import React from "react";
import Navbar from "../../Components/Navbar/Navbar";

const Category = () => {
  return (
    <>
      <Navbar />
      <div className="category-page">
        <div className="row">
            <div className="col-md-4"><div className="cat-1">1</div></div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
        </div>
        <div className="cat-2">2</div>
        <div className="cat-3">3</div>
        <div className="cat-4">4</div>
        <div className="cat-5">5</div>
        <div className="cat-6">6</div>
      </div>
    </>
  );
};

export default Category;
