import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./login";
import SignUp from "./SignUp";
import "./loginandsignup.css";
import BlumaLogo from "../LandingComponent/Button&Search/BlumaLogo";
import BigBlumaLogo from "../LandingComponent/Button&Search/BigBlumaLogo";
import styled from "styled-components";

const Heading = styled.h1`
  text-align: center;
  font-size: 43px;
`;

export default function LoginAndSignUp() {
  const [login, setLogin] = useState(false);
  const [heading, setHeading] = useState("REGISTER");
  function displayLoginSection() {
    if (!login) {
      setLogin(true);
      setHeading("LOGIN");
    }
  }
  function displaySignUpSection() {
    if (login) {
      setLogin(false);
      setHeading("REGISTER");
    }
  }

  return (
    <section className="login-and-signup">
      <nav className="nav-bar">
        <BlumaLogo />
        <BigBlumaLogo />
      </nav>
      <div className="container">
        <div className="img-section  bg-gradient-to-tr from violet-500 to-fuchsia-500">
          {" "}
          <BigBlumaLogo />{" "}
          <div className="nav-btns">
            <button
              className="login bg-gradient-to-tr from violet-500 to-fuchsia-500"
              onClick={displayLoginSection}
              color="Purple"
            >
              Login
            </button>
            <button onClick={displaySignUpSection}>Sign up</button>
          </div>
        </div>
        
        {/* <div class="h-14 bg-gradient-to-tr from violet-500 to-fuchsia-500 "></div> */}
        <div className="main-content">
         
          <Heading>{heading}</Heading>
          {login ? <Login /> : <SignUp />}
        </div>
      </div>
    </section>
  );
}
