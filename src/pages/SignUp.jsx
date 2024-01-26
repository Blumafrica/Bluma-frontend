import React, { useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");

  function checkPasswordEmpty() {
    return !(password === "" || confirmPassword === "");
  }

  function checkPasswordMatch() {
    return password === confirmPassword;
  }

  const navigateToHomePage = useCallback((param) => {
    navigate("/HomePage", { state: { value: param } });
  }, [navigate]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (checkPasswordEmpty() && checkPasswordMatch()) {
      try {
        const response = await axios.post(
            "https://blumafricabackend-production.up.railway.app/api/v1/user/register",
            { username, email, password },
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
        );

        const { id, message, token } = response.data;
        localStorage.setItem("authToken", token);
        console.log("Message -> ", message);
        console.log("Token -> ", token);
        console.log("Id -> ", id);
        navigateToHomePage(id);
      } catch (err) {
        console.error(err);
        setErrorMsg(err.message); // Assuming error has a 'message' property
      }
    }
  }

  return (
      <div className="sign-up">
        <div className="">
          <p style={{ color: "red", backgroundColor: "red" }}>
            Error message: {errorMsg}
          </p>
          <form onSubmit={handleSubmit}>
            <input
                className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
                className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
                className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input
                className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />
            <input
                type="submit"
                className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-purple-400 text-center text-xl"
            />
          </form>
        </div>
      </div>
  );
}

export default SignUp;
