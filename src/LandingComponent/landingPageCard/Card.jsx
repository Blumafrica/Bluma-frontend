import React from "react";
import "./card.css";
import likeIcon from "../assets/like 1.svg";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();
  function goToPost() {
    navigate("/PostView");
  }
  return (
    <div id="card" className={props.class} class="bg-pink-200 " >
       <div className="post-info">
          <div style={{ display: "flex" }} class="h-[5rem] w-[30rem] ml-[15px]  mt-[2rem]">
            <div class="grid place-content-center h-[5rem] w-[4rem]  "><img src={props.userPic} alt="" className="user-pic" /></div>
            <div class="grid gap-0 bg-purple-200 w-[20rem]">
              <p class="mt-5px " className={`${Card.userName}`}>{props.userName}</p>
              <p>{props.date}</p>
            </div>
          </div>
        </div>
      <img src={props.coverPic} alt="" className="cover-pic" />
      <div className="card-container">
        <h2>{props.heading}</h2>
        <h5>{props.description}</h5>
        <p>{props.summary}</p>
      </div>
    </div>
  );
}

export default Card;
