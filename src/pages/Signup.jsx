import React, { useState } from "react";
import {Link} from "react-router-dom"

export default function SignUp(){

    // const navigateTo = useNavigate();
    const [createPassword, setCreatePassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
        
    const matchPassword = () =>{
        if(createPassword !== "" && createPassword === confirmPassword){
        setIsSubmitDisabled(false);
        console.log("FORM ACCEPTED");
        }else{
        setIsSubmitDisabled(true)
        console.log("FORM NOT ACCEPTED");
        }
    }

    const visible = () => {
        const signUpBtn = document.getElementsByClassName("hidden:SignUp ");
        const loginBtn = document.getElementsByClassName("hidden:Login");
        if(loginBtn[0].classList.contains("invisible")){
            loginBtn[0].classList.remove("invisible");
            signUpBtn[0].classList.add("invisible");
        }else{
            loginBtn[0].classList.add("invisible");
            signUpBtn[0].classList.remove("invisible");
        }
      }
    return(
        <>
        <div class=" w-1/4 absolute top-44 left-1/2">
            <ul class="list-none flex justify-between p-4 text-xl font-semibold">
            <li class="border-b-4 border-purple-600 pb-4">
            <Link to="#"
            onClick={visible}
            >REGISTER</Link>
            </li>
            <br></br>
            <li>
            <Link to="#"
                style={{textDecoration: 'none'}}
                onClick={visible}
                >LOGIN</Link>
            </li>
            </ul>
      </div>
        <div class="flex relative top-64 left-1/4 border-2 p-2 shadow-2xl border-grey-300 w-1/2">
            
            <div class="w-1/2 m-3">
                <p>Image</p>
            </div>
            <div class="w-1/2">
                <div className="SignUp">
                <form>
                    <input class="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl" type="text" placeholder="First Name"></input>
                    <br></br>
                    <input class="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl" type="text" placeholder="Last Name"></input>
                    <br></br>
                    <input class="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl" type="email" placeholder="Email"></input>
                    <br></br>
                    <input class="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl" type="text" placeholder="Create Password"></input>
                    <br></br>
                    <input class="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl" type="text" placeholder="Conform Paasowrd"></input>
                    <br></br>
                    <div class="flex justify-center mr-32">
                    <Link to="/HomePage">
                    <p class="btn border-2 w-4/5 border-purple-600 m-5 rounded">Submit</p>
                    </Link>
                    </div>
                </form>
                </div>

                <div className="Login" class="invisible">
                    <form>
                    <input class="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl" type="email" placeholder="Email"></input>
                    <br></br>
                    <input class="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl" type="text" placeholder="Create Password"></input>
                    <div class="flex justify-center mr-32">
                    <Link to="/HomePage">
                    <p class="btn border-2 w-4/5 border-purple-600 m-5 rounded">Submit</p>
                    </Link>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}