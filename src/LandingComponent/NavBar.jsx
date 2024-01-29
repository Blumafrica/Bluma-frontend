import React, { useCallback } from "react";
import BlumaLogo from "./Button&Search/BlumaLogo";
import { NavLink } from "react-router-dom";
import SignInBtn from "./Button&Search/SignInBtn ";
import Hambuger from "./Button&Search/hambuger";
import { useNavigate, Link } from "react-router-dom";
import "./navbar.css";
import Login from "../pages/login";
import Header from "../layout/header";

function NavBar() {
  
  // const navigate = useNavigate()


  // const navigateToLoginPage = useCallback ((param) => {
  //    navigate("/LoginAndSignUp", {state: {value : param}})
  // }, [])

  // const navigateToLoginPage = useCallback ((param) => {
  //    navigate("/Login", {state: {value : param}})
  // }, [])

  return (
    <>
    <Header />
    </>
    // <div className="nav-bar" background-color="transparent">
    //   <BlumaLogo />
    //   {/* <SearchBar/> */}
    //   <div className="links">
    //     <NavLink to="about">About</NavLink>
    //     <NavLink to="products">Products</NavLink>
    //     <NavLink to="events">Events</NavLink>
    //   </div>
    //   <div className="check-in">
    //     {/* <div onClick={navigateToLoginPage}>Log in</div> */}
    //   <Link to={`/Login`}>Log in</Link>
    //     {/* <SignInBtn /> */}
    //     {/* <SignUpBtn /> */}
    //   </div>
    //   <Hambuger />
    // </div>
  );
}

export default NavBar;
