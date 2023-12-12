import "./FestivalSlideShow.css";
import React, { useState } from "react";
import ImageCard from "./ImageCard";
import img1 from "../assets/9ja_one.jpeg";
import img2 from "../assets/9ja_six.jpeg";
import img3 from "../assets/9ja_five.jpeg";
function FestivalSlideShow() {
    const [imgOne,setImgOne]= useState(img1)
    const [imgTwo,setImgTwo]= useState(img2)
    const [imgThree,setImgThree]= useState(img3)
    function changeImages(){
        
    }

  return (
    <div className="festival-slide-show">
      <h1 className="caption">Our Culuture Our Tradition</h1>
      <div className="wrapper">
        <ImageCard image={imgOne} />
        <ImageCard image={imgTwo} />
        <ImageCard image={imgThree} />
      </div>
    </div>
  );
}

export default FestivalSlideShow;
