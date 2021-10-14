import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import  {ReactComponent as SliderItem1}  from "../icons/slider-item3.svg";

export default class MultipleRows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <SliderItem1/>
          </div>
          <div>
            <SliderItem1/>
          </div>
          <div>
            <SliderItem1/>
          </div>
          <div>
            <SliderItem1/>
          </div>
          <div>
            <SliderItem1/>
          </div>
          <div>
            <SliderItem1/>
          </div>
        </Slider>
      </div>
    );
  }
}