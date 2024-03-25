import React from "react";
import bell from "../assets/notifcations 1.svg";
import pic from "../assets/profile.svg";
import { Link } from "react-router-dom";

function Notification() {
  return (
    <div className="notification">
      {/* <img src={bell} alt="" /> */}
      <Link to="/UserProfile">
       <img src={pic} alt="" style={{width:"30px"}}/>
      </Link>
      {/* <img src={pic} alt="" style={{width:"30px"}}/> */}
    </div>
  );
}

export default Notification;
