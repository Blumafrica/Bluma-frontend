import React from "react";
import { useNavigate } from "react-router-dom";
import "./blumaLogo.css"

function BlumaLogo() {
  const navigate = useNavigate()
  function returnHome(){
    navigate("/")
  }
  return (
    <div className="bluma-logo">
      <button onClick={returnHome}>
        Blu<span>ma</span>
      </button>
    </div>
  );
}

export default BlumaLogo;
