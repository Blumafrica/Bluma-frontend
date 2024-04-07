import React from "react";
import CardCss from "./card.css";
import likeIcon from "../assets/like 1.svg";
import { useNavigate } from "react-router-dom";


function Card(props) {
  const navigate = useNavigate();
  function goToPost() {
    navigate("/PostView");
  }
  return (
    <div id="card" className={props.class} class=" " >
       <div className="post-info">
          <div style={{ display: "flex" }} class="h-[5rem] w-[30rem] ml-[15px]  mt-[2rem]">
            <div class="grid place-content-center h-[5rem] w-[4rem]  "><img src={props.userPic} alt="" className="user-pic" /></div>
            <div className="grid  bg-purple- w-[20rem]">
              <p class="mt-5px " className="userName">{props.userName}</p>
              <p className="date">{props.date}</p>
            </div>
          </div>
       </div>
        {/*<div id="divider"></div>*/}
        <div id="imagesCard" class="" >
          {props.images.length > 0
            
          }

        </div>
      {/*<img src={props.coverPic} alt="" className="cover-pic" />*/}
      <div className="card-container">
        <h2 id="divider">{props.heading}</h2>
        <h5>{props.description}</h5>
        <p>{props.summary}</p>
      </div>
    </div>
  );
}

export default Card;
