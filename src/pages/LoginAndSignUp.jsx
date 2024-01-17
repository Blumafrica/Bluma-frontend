import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./login";
import SignUp from "./SignUp";
import "./loginandsignup.css";
import BlumaLogo from "../LandingComponent/Button&Search/BlumaLogo"


export default function LoginAndSignUp() {
  const [login, setLogin] = useState(false);
  function displayLoginSection() {
    if (!login) {
      setLogin(true);
    }
  }
  function displaySignUpSection() {
    if (login) setLogin(false);
  }

  return (
    <section className="login-and-signup">
      <nav className="nav-bar">
        <BlumaLogo/>
      </nav>
      <div className="container">
        <div className="img-section  bg-gradient-to-tr from violet-500 to-fuchsia-500" ></div>
        {/* <div class="h-14 bg-gradient-to-tr from violet-500 to-fuchsia-500 "></div> */}
        <div className="main-content">
          <div className="nav-btns">
            <button onClick={displayLoginSection}>Login</button>
            <button onClick={displaySignUpSection}>Sign up</button>
          </div>
          {login ? <Login /> : <SignUp />}
        </div>
      </div>
    </section>
  );
}
