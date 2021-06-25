import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ children, bannerbtn, ...otherProps }) => {
  return (
    <button
      className={`${bannerbtn ? "banner-btn" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
