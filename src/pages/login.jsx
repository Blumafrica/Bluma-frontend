
import React, { useState, useCallback } from "react";
import { useAuth } from "../hooks/AuthenticationProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
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
    const loginAuthentication = useAuth();

    const handleSubmitEvent = async (e) => {
        e.preventDefault();

        if (input.email !== "" && input.password !== "") {
            try {
                const url_ = "http://localhost:8080/login"
                // const url = 'https://blumafricabackend-production.up.railway.app/api/v1/user/login';
                const response = await axios.post(
                    url_,
                    input,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (response.status === 200)
                    navigateToHomePage(userData)
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

    const navigateToHomePage = useCallback((parameter) => {
        navigate("/HomePage", { state: { value: parameter } });
    }, [navigate]);

    return (
        <div className="login">
            <form onSubmit={handleSubmitEvent}>
                <p style={{ color: 'red' }}>error message: {error.message}</p>
                <input
                    className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
                    type="email"
                    placeholder="email"
                    value={input.email}
                    onChange={(e) => setInput({ ...input, email: e.target.value })}
                />
                <br />
                <input
                    className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
                    type="password"
                    placeholder="password"
                    value={input.password}
                    onChange={(e) => setInput({ ...input, password: e.target.value })}
                />
                <input
                    type="submit"
                    className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-purple-400 text-center text-xl"
                />
            </form>
            <br />
        </div>
    );
};

export default Login;

