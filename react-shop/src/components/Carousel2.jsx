import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


export default class MultipleRows2 extends Component {
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div className="carousel-container">
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