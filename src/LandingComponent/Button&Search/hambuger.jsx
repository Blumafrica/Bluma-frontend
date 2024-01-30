import React, { useState } from "react";
import "./hambuger.css";
import MobileNav from "../../pages/mobileNav";
import { useNavigate } from "react-router-dom";

function Hambuger() {
  const [display, setDisplay] = useState(false); 
  const navigate = useNavigate();

  const displayMobileNav = () => {
    navigate("/Hambuger")
  };

  return (
    <div className="hambuger" onClick={displayMobileNav}>
      <span></span>
      <span></span>
      <span></span>
      {display && <MobileNav status={display} />}
    </div>
  );
}

export default Hambuger;
