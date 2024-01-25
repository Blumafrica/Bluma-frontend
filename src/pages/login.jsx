import { useCallback, useState } from "react";
import { useAuth } from "../hooks/AuthenticationProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
    });
    const [userData, setUserData]  = useState({
        userId: "",
        userAuthority : ""
    }) 
    const [error , setError] = useState('')
    const navigate = useNavigate()

    const loginAuthentication = useAuth();

    const handleSubmitEvent = async (e) => {

        e.preventDefault();
        if (input.email !== "" && input.password !== "") {
            try {
                const url = 'https://localhost:2005/api/v1/user/api/login/';
                // const response = await loginAuthentication.login(input);
                const response = await fetch(url, {
                    method : 'PUT',
                    headers :{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(input)

                })
                console.log("Login successful", response);
                if(response.ok){
                    const data = await response.json;
                    setUserData({  ...userData, userId : data.id})
                    setUserData({ ...userData, userAuthority :  data.authority})
                    console.log("response ==> ", data)
                    navigateToHomePage(userData)


                }
            } catch (error) {
                console.error("Login failed", error);
                // alert("Login failed. Please try again.");
                alert("error message ==> " , error.message);
                setError(error)

                
            }
        } else {
            alert("Please provide a valid input");
        }
    };
    const navigateToHomePage= useCallback ( (parameter) => {
            navigate("/HomePage", {state : {value : parameter}})
    },[])

    return (
        <div className="login">
            <form onSubmit={handleSubmitEvent}>
                <p color={'red'}>error message: {error}</p>
                <input
                    className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
                    type="email"
                    placeholder="email"
                    value={input.email}
                    onChange={(e) => setInput({ ...input, email: e.target.value })}
                ></input>
                <br></br>
                <input
                    className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
                    type="password"
                    placeholder="password"
                    value={input.password}
                    onChange={(e) => setInput({ ...input, password: e.target.value })}
                ></input>
                 <input type="submit"  
           class="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-purple-400 text-center text-xl"/>

            </form>
            <br></br>
        </div>
    );
};

export default Login;
