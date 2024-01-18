import { useState } from "react";
import { useAuth } from "../hooks/AuthenticationProvider";

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    const loginAuthentication = useAuth();

    const handleSubmitEvent = async (e) => {
        e.preventDefault();
        if (input.email !== "" && input.password !== "") {
            try {
                const response = await loginAuthentication.login(input);
                console.log("Login successful", response);
            } catch (error) {
                console.error("Login failed", error);
                // alert("Login failed. Please try again.");
            }
        } else {
            alert("Please provide a valid input");
        }
    };

    return (
        <div className="login">
            <form onSubmit={handleSubmitEvent}>
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
                <button type="submit">Submit</button>
            </form>
            <br></br>
        </div>
    );
};

export default Login;
