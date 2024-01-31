import React from "react";
import "./card.css";
import likeIcon from "../assets/like 1.svg";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();
  function goToPost(){
    navigate("/PostView")
  }
  return (
    <div id="card" className={props.class}>
      <img src={props.coverPic} alt="" className="cover-pic" />
      <div className="container">
      <h2>{props.heading}</h2>
      <h5>{props.description}</h5>
      <p>{props.summary}</p>
      <div className="post-info">
        <div style={{display:"flex"}}>
          <img src={props.userPic} alt="" className="user-pic" />
          <div>
            <p>{props.userName}</p>
            <p>{props.date}</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Card;
