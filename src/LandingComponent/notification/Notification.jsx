import React from "react";
import bell from "../assets/notifcations 1.svg";
import pic from "../assets/profile.svg";

function Notification() {
  return (
    <div className="notification">
      <img src={bell} alt="" />
      <img src={pic} alt="" style={{width:"30px"}}/>
    </div>
  );
}

export default Notification;
