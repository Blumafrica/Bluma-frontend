import {Link} from "react-router-dom"
import { useState } from "react";

export default function SignUp(){

    // const navigateTo = useNavigate();
    const [createPassword, setCreatePassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [swapPage, setSwap] = useState(1);

    const matchPassword = () =>{
        if(createPassword !== "" && createPassword === confirmPassword){
            setIsSubmitDisabled(false);
            console.log("FORM ACCEPTED");
        }else{
            setIsSubmitDisabled(true)
            console.log("FORM NOT ACCEPTED");
        }
    }

    function swap(id){
        setSwap(id);
    }

    return(
        <>
            <div class=" w-1/4 absolute top-44 left-1/2">
                <ul class="list-none flex justify-between p-4 text-xl font-semibold">
                    <li class="border-b-4 hover:border-purple-600 pb-4">
                        <Link onClick={() => swap(1)}><p>REGISTER</p></Link>
                    </li>
                    <br></br>
                    <li class="border-b-4 hover:border-purple-600 pb-4">
                        <Link onClick={() => swap(2)}><p>LOGIN</p></Link>
                    </li>
                </ul>
            </div>
            <div class="flex relative top-64 left-1/4 border-2 p-2 shadow-2xl border-grey-300 w-1/2">

                <div class="w-1/2 m-3">
                    <p>Image</p>
                </div>
                <div class="w-1/2">
                    <div className={swapPage === 1 ? "register" : "invi"}>
                        <form>
                            <h2 class="uppercase text-3xl font-semibold text-center m-3">Register</h2>
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
                            <div class="m-4">
                                <label class="text-xl font-semibold m-3">Choose your Gender: </label>
                                <label class="text-xl font-semibold m-3">Male</label>
                                <input class="p-3 w-30" type="radio" value="male" checked></input>
                                <label class="text-xl font-semibold m-3">Female</label>
                                <input class="p-3 w-30" type="radio" value="female"></input>
                            </div>
                            <br></br>
                            <div class="flex justify-center mr-32">
                                <Link to="/HomePage">
                                    <p class="btn border-2 w-4/5 border-purple-600 m-5 rounded">Submit</p>
                                </Link>
                            </div>
                        </form>
                    </div>

                    <div className={swapPage === 2 ? "register" : "invi"}>
                        <form>
                            <h2 class="uppercase text-3xl font-semibold text-center m-3">Login</h2>
                            <input class="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl" type="email" placeholder="Email"></input>
                            <br></br>
                            <input class="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl" type="password" placeholder="Enter Password"></input>
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