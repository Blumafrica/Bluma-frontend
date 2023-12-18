import React from "react";
import Slider from "react-slick";
import "./FestivalSlideShow.css";
import ImageCard from "./ImageCard";
import img1 from "../assets/9ja_one.jpeg";
import img2 from "../assets/9ja_six.jpeg";
import img3 from "../assets/9ja_five.jpeg";
import img5 from "../assets/9ja_three.jpeg"
import img4 from "../assets/9ja_four.jpeg"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const FestivalSlideShow = () => {
  const data = [{ pic: img1 }, { pic: img2 }, { pic: img3 }, {pic: img4}, {pic: img5}];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="festival-slide-show">
      <h1 className="caption">Our Culture Our Tradition</h1>
      <div className="wrapper">
        <Slider {...settings}>
          {data.map((d, index) => (
            <ImageCard key={index} image={d.pic} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FestivalSlideShow;
