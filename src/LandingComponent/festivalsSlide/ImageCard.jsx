import React from "react";
import "./FestivalSlideShow.css";

function ImageCard(props) {
  return (
    <div className="image-card">
      <img
        src={props.image}
        alt=""
        style={{ height: "20rem", borderRadius: "10px" , border:"none", width:"100%"}}
      />
    </div>
  );
}

export default ImageCard;
