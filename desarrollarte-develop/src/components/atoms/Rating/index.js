import React from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import "./styles.css";

export const Rating = () => {
  return (
    <div className="product-rating">
      <div>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <FaRegHeart />
    </div>
  );
};
