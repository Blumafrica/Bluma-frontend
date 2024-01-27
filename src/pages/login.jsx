import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
    const [input, setInput] = useState({
        email: "",
        password: "",
    });
    const [userData, setUserData] = useState({
        userId: "",
        userAuthority: "",
        userToken: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    // Assuming `useAuth` is a custom hook you have defined
    // const loginAuthentication = useAuth();

    const handleSubmitEvent = async (e) => {
        e.preventDefault();

        if (input.email !== "" && input.password !== "") {
            try {
                const url = 'https://blumafricabackend-production.up.railway.app/login';
                const response = await axios.post(
                    url,
                    input,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (response.status === 200) {
                    navigateToHomePage(userData);
                }

                const data = response.data;
                setUserData({
                    ...userData,
                    userId: data.id,
                    userAuthority: data.authority,
                    userToken: data.token,
                });
            } catch (error) {
                console.error("Login failed", error);
                alert("error message ==> " + error.message);
                setError(error);
            }
        } else {
            alert("Please provide a valid input");
        }
    };

    // Assuming this is the missing function
    const navigateToHomePage = (userData) => {
        // Implement your navigation logic here
        console.log("Navigate to home page with user data", userData);
    };

    return (
        <>
            <div className="w-1/4 absolute top-44 left-1/2">
                <ul className="list-none flex justify-between p-4 text-xl font-semibold">
                    <li className="border-b-4 hover:border-purple-600 pb-4">
                        <Link onClick={() => swap(1)}><p>REGISTER</p></Link>
                    </li>
                    <br />
                    <li className="border-b-4 hover:border-purple-600 pb-4">
                        <Link onClick={() => swap(2)}><p>LOGIN</p></Link>
                    </li>
                </ul>
            </div>
            <div className="flex relative top-64 left-1/4 border-2 p-2 shadow-2xl border-grey-300 w-1/2">
                {/* ... rest of your code */}
            </div>
        </>
    );
}
