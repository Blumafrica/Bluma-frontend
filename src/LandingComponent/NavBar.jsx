import React from "react";
import BlumaLogo from "./Button&Search/BlumaLogo";
import { NavLink } from "react-router-dom";
import SignInBtn from "./Button&Search/SignInBtn ";
import Hambuger from "./Button&Search/hambuger";
import "./navbar.css";

function NavBar() {
  return (
    <div className="nav-bar" background-color="transparent">
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
      <Hambuger />
    </div>
  );
}

export default NavBar;
