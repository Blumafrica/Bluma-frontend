import React from "react";
import BlumaLogo from "./Button&Search/BlumaLogo";
import { NavLink } from "react-router-dom";
import SignInBtn from "./Button&Search/SignInBtn ";
import SignUpBtn from "./Button&Search/SignUpBtn";
import Hambuger from "./Button&Search/hambuger";
import SearchBar from "./Button&Search/SearchBar";
import "./navbar.css"

function NavBar() {
  return (
    <div className="nav-bar">
      <BlumaLogo />
      {/* <SearchBar/> */}
      <div className="links">
        <NavLink to="about">About</NavLink>
        <NavLink to="products">Products</NavLink>
        <NavLink to="events">Events</NavLink>
      </div>
      <div className="check-in">
      <SignInBtn />
      {/* <SignUpBtn /> */}
      </div>
      <Hambuger/>
      
    </div>
  );
}

export default NavBar;
