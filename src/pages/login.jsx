import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const response = await axios
        .post("http://localhost:8080/api/v1/user/login")
        .then((result) => console.log(result.data));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
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
        <button >Submit</button>
      </form>
      <br></br>
    </div>
  );
}

export default Login;
