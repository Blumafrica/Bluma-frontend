import React from "react";
import { useNavigate } from "react-router-dom";
import "./blumaLogo.css"
import PropTypes from "prop-types";


function BlumaLogo({textColor}) {
  const navigate = useNavigate()
  function returnHome(){
    navigate("/")
  }
  return (
    <div className="bluma-logo">
      <button
          style={{color: textColor}}
          onClick={returnHome}>
        Blu<span>ma</span>
      </button>
    </div>
  );
}

BlumaLogo.propTypes = {
    textColor: PropTypes.string.isRequired,
};

export default BlumaLogo
;
