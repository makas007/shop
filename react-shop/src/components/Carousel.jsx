import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


export default class MultipleRows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true

    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <img src="/images/image_1.png" alt=""/>
          </div>
          <div>
            <img src="/images/image_1.png" alt=""/>
          </div>
          <div>
            <img src="/images/image_1.png" alt=""/>
          </div>
        </Slider>
        <p className="slider-text">Unique & exlusive products made by independant.
          Designers craftmen, artist & creators who care about the environment
        </p>
      </div>
    );
  }
}