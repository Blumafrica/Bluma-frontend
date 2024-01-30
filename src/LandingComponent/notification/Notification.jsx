import React from "react";
import bell from "../assets/notifcations 1.svg";
import pic from "../assets/profile.svg";
import { useNavigate } from "react-router-dom";

function Notification() {
  const navigate = useNavigate();
  const navigateToProfile = () => {
    navigate("/UserProfile");
  };
  return (
    <div className="notification" onClick={navigateToProfile}>
      <img src={bell} alt="" />
      <img src={pic} alt="" style={{ width: "30px" }} />
    </div>
  );
}

export default Notification;
