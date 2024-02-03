import React, { useState } from "react";
import AdminHomePage from "./AdminHomePage";
import axios from "axios"
import "./adminlogin.css"
import NavBar from "../../LandingComponent/NavBar";
import BlumaLogo from "../../LandingComponent/Button&Search/BlumaLogo";
import Footer from "../../LandingComponent/footer"

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/login/",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setIsSuccess(true)
      console.log(response.data)
    } catch (err) {
      setErrorMsg("Invalid credentials")
      console.log(err);
    }
  };
  return (
    <div className="admin-login">
        <nav className="nav-bar">
            <BlumaLogo></BlumaLogo>
        </nav>
      <h1>Admin login</h1>
      {isSuccess ? (
        <AdminHomePage />
      ) : (
        <form onSubmit={handleSubmit}>
          {errorMsg && <p style={{color:"red"}}>{errorMsg}</p>}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="submit">Login</button>
        </form>
      )}
      <Footer/>
    </div>
  );
}

export default AdminLogin;
