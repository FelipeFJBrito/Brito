import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HeaderSlider.css';

import p1 from './HeaderSliderAssets/p1.jpeg';
import p2 from './HeaderSliderAssets/p2.jpeg';
import p3 from './HeaderSliderAssets/p3.jpeg';
import video from './HeaderSliderAssets/video.mp4';

function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear"
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="card">
          <img src={p1} alt="Slide 1" />
        </div>
        {/*<div className="card">
          <video controls>
            <source src={video} type="video/mp4" />
          </video>
        </div>*/}
        <div className="card">
          <img src={p2} alt="Slide 2" />
        </div>
        <div className="card">
          <img src={p3} alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;

