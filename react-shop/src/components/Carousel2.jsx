import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import {ReactComponent as BagSVG} from '../icons/bag.svg'



export default class MultipleRows extends Component {
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <div className="carousel-container">
        <p>Products from France</p>
        <Slider {...settings}>
          <div>
            <img className="img-carousel2" src="/images/image_2.png" alt=""/>
            <div className="content-slider">
              <div className="text-slide">
                <p>Name</p>
                <p>Collection name</p>
              </div>
              <div className="slide-price">
                <BagSVG/>
                <p>170$ price</p>
              </div>
            </div>
          </div>
          <div>
            <img className="img-carousel2" src="/images/image_2.png" alt=""/>
            <div className="content-slider">
              <div className="text-slide">
                <p>Name</p>
                <p>Collection name</p>
              </div>
              <div className="slide-price">
                <BagSVG/>
                <p>170$ price</p>
              </div>
            </div>
          </div>
          <div>
            <img className="img-carousel2" src="/images/image_2.png" alt=""/>
            <div className="content-slider">
              <div className="text-slide">
                <p>Name</p>
                <p>Collection name</p>
              </div>
              <div className="slide-price">
                <BagSVG/>
                <p>170$ price</p>
              </div>
            </div>
          </div>
          <div>
            <img className="img-carousel2" src="/images/image_2.png" alt=""/>
            <div className="content-slider">
              <div className="text-slide">
                <p>Name</p>
                <p>Collection name</p>
              </div>
              <div className="slide-price">
                <BagSVG/>
                <p>170$ price</p>
              </div>
            </div>
          </div>
          <div>
            <img className="img-carousel2" src="/images/image_2.png" alt=""/>
            <div className="content-slider">
              <div className="text-slide">
                <p>Name</p>
                <p>Collection name</p>
              </div>
              <div className="slide-price">
                <BagSVG/>
                <p>170$ price</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}