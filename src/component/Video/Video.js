import React from "react";
import "./Video.scss";

import { Link } from "react-router-dom";

const Video = ({ image, avatar, title }) => {
  return (
    <div className="video-item-card">
      <div
        className="video-thumb"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="video-content">
        <div className="avatar">
          <Link to="/">
            <img src={avatar} />
          </Link>
        </div>
        <div className="title my-auto">
          <h5>{title}</h5>
        </div>
      </div>
    </div>
  );
};

export default Video;
