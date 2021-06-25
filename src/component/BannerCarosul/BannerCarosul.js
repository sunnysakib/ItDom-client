import React from "react";
import "./BannerCarosul.scss";

import banner1 from "../../image/chaozzy-lin-des3ft1Larc-unsplash.jpg";
import banner2 from "../../image/elti-meshau-2S2F2exmbhw-unsplash.jpg";
import banner3 from "../../image/pexels-kyle-loftus-2510428.jpg";
import CustomButton from "../CustomButton/CustomButton"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faCalendarWeek,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";

const BannerCarosul = () => {
  return (
    <div className="container banners mt-4 mb-5">
      <div
        id="carouselExampleIndicators"
        class="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <section class="banner" style={{ background: `url(${banner1})` }}>
              <div class="container">
                <div class="row">
                  <div class="col-xl-7 col-lg-12 my-auto">
                    <div class="banner-content">
                      <h1>The Revenant</h1>
                      <div class="d-block d-lg-flex">
                        <ul class="list-inline meta">
                          <li class="list-inline-item">
                            <FontAwesomeIcon icon={faFilm} />
                            Action
                          </li>
                          <li class="list-inline-item">
                          <FontAwesomeIcon icon={faCalendarWeek} />2021
                          </li>
                          <li class="list-inline-item">
                          <FontAwesomeIcon icon={faPlayCircle} />2 h 20 min
                          </li>
                          <li class="list-inline-item">
                            <span>4K</span>
                          </li>
                        </ul>
                      </div>
                      <p>
                        In the 1820s, a frontiersman, Hugh Glass, sets out on a
                        path of vengeance against those who left him for dead
                        after
                      </p>
                      <CustomButton>Watch Video</CustomButton>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="carousel-item">
            <section class="banner" style={{ background: `url(${banner2})` }}>
              <div class="container">
                <div class="row">
                  <div class="col-xl-7 col-lg-12 my-auto">
                    <div class="banner-content">
                      <h1>The Pale Door</h1>
                      <div class="d-block d-lg-flex">
                        <ul class="list-inline meta">
                          <li class="list-inline-item">
                          <FontAwesomeIcon icon={faFilm} />Action
                          </li>
                          <li class="list-inline-item">
                          <FontAwesomeIcon className="icon" icon={faCalendarWeek} />2021
                          </li>
                          <li class="list-inline-item">
                          <FontAwesomeIcon icon={faPlayCircle} />2 h 20 min
                          </li>
                          <li class="list-inline-item">
                            <span>HD</span>
                          </li>
                        </ul>
                      </div>
                      <p>
                        In the 1820s, a frontiersman, Hugh Glass, sets out on a
                        path of vengeance against those who left him for dead
                        after
                      </p>
                      <CustomButton>Watch Video</CustomButton>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="carousel-item">
            <section class="banner" style={{ background: `url(${banner3})` }}>
              <div class="container">
                <div class="row">
                  <div class="col-xl-7 col-lg-12 my-auto">
                    <div class="banner-content">
                      <h1>Paper Lives</h1>
                      <div class="d-block d-lg-flex">
                        <ul class="list-inline meta">
                          <li class="list-inline-item">
                          <FontAwesomeIcon icon={faFilm} />Action
                          </li>
                          <li class="list-inline-item">
                          <FontAwesomeIcon icon={faCalendarWeek} />2021
                          </li>
                          <li class="list-inline-item">
                          <FontAwesomeIcon icon={faPlayCircle} />2 h 20 min
                          </li>
                          <li class="list-inline-item">
                            <span>8K</span>
                          </li>
                        </ul>
                      </div>
                      <p>
                        In the 1820s, a frontiersman, Hugh Glass, sets out on a
                        path of vengeance against those who left him for dead
                        after
                      </p>
                      <CustomButton>Watch Video</CustomButton>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCarosul;

