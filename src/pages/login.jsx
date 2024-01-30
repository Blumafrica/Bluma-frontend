import {Link} from "react-router-dom"
import { useAuth } from "../hooks/AuthenticationProvider";
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

// export const Login = () => {
//     const [input, setInput] = useState({
//         email: "",
//         password: "",
//     });

//     const loginAuthentication = useAuth();

//     const handleSubmitEvent = async (e) => {
//         e.preventDefault();
//         if (input.email !== "" && input.password !== "") {
//             try {
//                 const response = await loginAuthentication.login(input);
//                 console.log("Login successful", response);
//             } catch (error) {
//                 console.error("Login failed", error);
//                 // alert("Login failed. Please try again.");
//             }
//         } else {
//             alert("Please provide a valid input");
//         }
//     };

//     return (
//         <>
//             <div className="login">
//                 <form onSubmit={handleSubmitEvent}>
//                     <input
//                         className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
//                         type="email"
//                         placeholder="email"
//                         value={input.email}
//                         onChange={(e) => setInput({ ...input, email: e.target.value })}
//                     ></input>
//                     <br></br>
//                     <input
//                         className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
//                         type="password"
//                         placeholder="password"
//                         value={input.password}
//                         onChange={(e) => setInput({ ...input, password: e.target.value })}
//                     ></input>
//                     <input type="submit"  
//                     class="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-purple-400 text-center text-xl"/>
//                 </form>
//                 <br></br>
//                 <li class="border-b-4 hover:border-purple-600 pb-4">
//                 <Link onClick={() => swap(2)}><p>LOGIN</p></Link>
//                 </li>
                
//             </div>
//             <div class="flex relative top-64 left-1/4 border-2 p-2 shadow-2xl border-grey-300 w-1/2">
                
//                 <div class="w-1/2 m-3">
//                     <p>Image</p>
//                 </div>
//                 <div class="w-1/2">
//                     <div className={swapPage === 1 ? "register" : "invi"}>
//                     <form>
//                         <h2 class="uppercase text-3xl font-semibold text-center m-3">Register</h2>
//                         <input class="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl" type="text" placeholder="First Name"></input>
//                         <br></br>
//                         <input class="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl" type="text" placeholder="Last Name"></input>
//                         <br></br>
//                         <input class="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl" type="email" placeholder="Email"></input>
//                         <br></br>
//                         <input class="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl" type="text" placeholder="Create Password"></input>
//                         <br></br>
//                         <input class="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl" type="text" placeholder="Conform Paasowrd"></input>
//                         <br></br>
//                         <div class="m-4">
//                         <label class="text-xl font-semibold m-3">Choose your Gender: </label>
//                         <label class="text-xl font-semibold m-3">Male</label>
//                         <input class="p-3 w-30" type="radio" value="male" checked></input>
//                         <label class="text-xl font-semibold m-3">Female</label>
//                         <input class="p-3 w-30" type="radio" value="female"></input>
//                         </div>
//                         <br></br>
//                         <div class="flex justify-center mr-32">
//                         <Link to="/HomePage">
//                         <p class="btn border-2 w-4/5 border-purple-600 m-5 rounded">Submit</p>
//                         </Link>
//                         </div>
//                     </form>
//                     </div>

//                         <div className={swapPage === 2 ? "register" : "invi"}>
//                             <form>
//                                 <h2 className="uppercase text-3xl font-semibold text-center m-3">Login</h2>
//                                 <input class="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl" type="email" placeholder="Email"></input>
//                                 <br></br>
//                                 <input class="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl" type="password" placeholder="Enter Password"></input>
//                                 <div class="flex justify-center mr-32">
//                                     <Link to="/HomePage">
//                                         <p class="btn border-2 w-4/5 border-purple-600 m-5 rounded">Submit</p>
//                                     </Link>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//         </>
//     )
// }

