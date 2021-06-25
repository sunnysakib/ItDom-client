import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./SectionTittle.scss";

const SectionTittle = ({ children }) => {
  return (
    <div className="section-title container">
      <div className="title">
        <h1>{children}</h1>
      </div>
      <div className="section-btn">
        <CustomButton>Watch More</CustomButton>
      </div>
    </div>
  );
};

export default SectionTittle;
