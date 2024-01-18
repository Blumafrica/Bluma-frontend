import React from "react";
import { useState } from "react";
import axios from "axios";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [errorMsg, setErrorMsg] = useState("");
  // const [success, setSuccess] = useState(false);

  function checkPasswordEmpty() {
    return !(password === "" || confirmPassword === "");

  }
  function checkPasswordMatch() {
    return password === confirmPassword;

  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (checkPasswordEmpty && checkPasswordMatch)
      try {
        const response =await axios.post(
            "https://blumafrica-production.up.railway.app/api/v1/user/register",
            {username, email, password},
            {
              headers: {
                "Content-Type": "application/json"
              },
              withCredentials: true
            }
        );
        const {id,message,token} =  response.data;
        localStorage.setItem("authToken",token)
        console.log("Message -> ",message)
        console.log("Token -> ",token)
        console.log("Id -> ",id)


      } catch (err) {
        console.log(err);
      }
  }
  return (
    <div className="sign-up">
      <div className="">
        <form onSubmit={handleSubmit}>
          <input
            class="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <br></br>
          <input
            class="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br></br>
          <input
            class="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br></br>
          <input
            class="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
            type="password"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
