import React, { useCallback } from "react";
import BlumaLogo from "./Button&Search/BlumaLogo";
import { NavLink } from "react-router-dom";
import Hambuger from "./Button&Search/hambuger";
import { useNavigate, Link } from "react-router-dom";
import "./navbar.css";


function NavBar() {
  

  return (
    
    <div className="nav-bar" background-color="transparent">
      <BlumaLogo />
      <div className="links">
        <NavLink to="about">About</NavLink>
        <NavLink to="products">Products</NavLink>
        <NavLink to="events">Events</NavLink>
      </div>
      <div className="check-in">
      <Link to={`/Login`}>Log in</Link>
      </div>
      <Hambuger />
    </div>
  );
}

export default NavBar;
