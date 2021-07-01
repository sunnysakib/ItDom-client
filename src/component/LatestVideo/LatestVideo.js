import React from "react";
import "./LatestVideo.scss";
import SectionTittle from "../SectionTittle/SectionTittle";
import image from "../../image/vGN6dixRBZA.jpg";
import image1 from "../../image/Zv11L-ZfrSg.jpg";
import image2 from "../../image/5465.jpg";
import image3 from "../../image/3-MNAX1jgbA.jpg";
import image4 from "../../image/ih6_YyRVtpI.jpg";
import image5 from "../../image/8IGsQoL1AgQ.jpg";
import image6 from "../../image/G99XxEDbNEs.jpg";
import image7 from "../../image/wzpjnFQ030M.jpg";
import Video from "../Video/Video";

import avatar1 from "../../image/titleImg1.jpg";
import avatar2 from "../../image/titleImg2.jpg";
import avatar3 from "../../image/titleImg3.jpg";
import avatar4 from "../../image/titleImg4.jpg";


const LatestVideo = () => {
  const videos = [
    {
      id: 1,
      title: "We are in a new Crysis Era!",
      avatar: avatar1,
      image: image,

    },
    {
      id: 2,
      title: "Disney and Pixar’s Luca | Teaser Trailer",
      avatar: avatar2,
      image: image1,
    },
    {
      id: 3,
      title: "We are in a new Crysis Era!",
      avatar: avatar3,
      image: image2,
    },
    {
      id: 4,
      title: "We are in a new Crysis Era!",
      avatar: avatar4,
      image: image3,
    },
    {
      id: 5,
      title: "We are in a new Crysis Era!",
      avatar: avatar2,
      image: image4,
    },
    {
      id: 6,
      title: "We are in a new Crysis Era!",
      avatar: avatar4,
      image: image5,
    },
    {
      id: 7,
      title: "We are in a new Crysis Era!",
      avatar: avatar3,
      image: image6,
    },
    {
      id: 8,
      title: "We are in a new Crysis Era!",
      avatar: avatar1,
      image: image7,
    },
  ];

  return (
    <div className="latest-video">
      <SectionTittle>Latest Video</SectionTittle>
      <div className="videos-section">
        <div className="videos">
          {videos.map(({id, ...otherProps}) => (
            <Video id={id} {...otherProps} />
          ))}
        </div>
      </div>
   </div>
  );
};

export default LatestVideo;
