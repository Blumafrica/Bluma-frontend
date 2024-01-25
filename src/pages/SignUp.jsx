import React from "react";
import { useState , useCallback} from "react";
import axios from "axios";
import {useNavigate, useLocation} from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate()
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);

  function checkPasswordEmpty() {
    return !(password === "" || confirmPassword === "");
  }
  function checkPasswordMatch() {
    return password === confirmPassword;
  }

  // const catchError = useCallback ( (param) => {
  //   navigate("/Error", {state :{value: param}})

  // let catchError = useCallback ( (param) => {
  //   useNavigate

  // }, [])

  const navigateToLandingPage = useCallback( (param)=>{
    navigate("/LandingPage", {state:{value: param}})
  })
  async function handleSubmit(e) {
    e.preventDefault();

    if (checkPasswordEmpty && checkPasswordMatch)
      try {
        const response =await axios.post(
            "https://localhost:8080/api/v1/user/register",
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
        setErrorMsg(err)
      }
  }
  return (
    
    <div className="sign-up">
      <div className="">
        <p color="red">{errorMsg}</p>
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
          <input
            type="submit"
            class="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-purple-400 text-center text-xl"
          />
        </form>
      </div>
    </div>
  );
}

export default SignUp;
