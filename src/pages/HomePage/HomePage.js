import React from "react";
import BannerCarosul from '../../component/BannerCarosul/BannerCarosul'
import Tranding from "../../component/Tranding/Tranding";
import './HomePage.scss'


const HomePage = () => {
  return (
   <div className='home-page'>
        <BannerCarosul/>
        <Tranding/>
   </div>
  );
};

export default HomePage;
