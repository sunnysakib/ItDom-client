import React from "react";
import BannerCarosul from '../../component/BannerCarosul/BannerCarosul'
import Tranding from "../../component/Tranding/Tranding";
import CountDown from "../../component/CountDown/CountDown";
import './HomePage.scss'
import LatestVideo from "../../component/LatestVideo/LatestVideo";


const HomePage = () => {
  return (
   <div className='home-page'>
        <BannerCarosul/>
        <Tranding/>
        <CountDown/>
        <LatestVideo/>
   </div>
  );
};

export default HomePage;
