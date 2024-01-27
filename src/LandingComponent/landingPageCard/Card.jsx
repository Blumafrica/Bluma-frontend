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
    <div id="card" className={props.class} onClick={goToPost}>
      <img src={props.coverPic} alt="" className="cover-pic" />
      <div className="container">
      <h3>{props.heading}</h3>
      <h5>{props.description}</h5>
      <p>{props.summary}</p>
      <div className="post-info">
        <div style={{display:"flex"}}>
          <img src={props.userPic} alt="" className="user-pic" />
          <div>
            <p>{props.userName}</p>
            <p>{props.date}</p>
          </div>
          <div style={{marginLeft: "50%"}}>
          {/* <button>
            <img src={likeIcon} alt="" className="like-icon"/>
          </button> */}
          <span>{props.likecount}</span>
        </div>
        </div>
       
      </div>
      </div>
    </div>
  );
}

export default Card;
