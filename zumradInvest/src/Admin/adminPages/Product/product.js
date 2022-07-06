import React from "react";
import Sidebar from "../../../components/Sidebar/sidebar";
import "./productStyle.css";

function Product() {
  return (
    <>
      <Sidebar />
      <div className="product">
        <h1>Product</h1>
        <div className="productContainer">
          <div className="product-box">
            <input type="file" />
          </div>
          <div className="product-box">
            <input type="file" />
          </div>
          <div className="product-box">
            <input type="file" />
          </div>
          <div className="product-box">
            <input type="file" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
