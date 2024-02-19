import Slider from "react-slick";
import "./main-slider.css";
import { getAllDishes } from "../../services/dish-service";
import { useState } from "react";
import { useEffect } from "react";

export default function MainPageSlider(props) {
  const CustomPrevArrow = (props) => (
    <div
      className="slick-arrow slick-prev"
      onClick={props.onClick}
      style={{ color: "CUSTOM_ARROW_COLOR" }}
    ></div>
  );

  const CustomNextArrow = (props) => (
    <div
      className="slick-arrow slick-next"
      onClick={props.onClick}
      style={{ color: "CUSTOM_ARROW_COLOR" }}
    ></div>
  );

  const settings = {
    centerMode: true,
    centerPadding: "10px",
    slidesToShow: 5,
    speed: 800,
    slidesToScroll: 2,
    arrows: true,
    dots: false,
    swipe: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
        arrows: true,
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <h4 className="slides-heading">{props.header}</h4>
      <section className="slides">
        <div className="slider-container">
          <Slider {...settings}>
            {props.data &&
              props.data.map((dish) => (
                <div className="dish" key={dish.id}>
                  <div className="image">
                    <img src={dish.imageURLs[0]} alt="" />
                  </div>
                  <h3 className="dish-name">{dish.name}</h3>
                  <p>{dish.description.slice(0, 80) + "..."}</p>
                </div>
              ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}
