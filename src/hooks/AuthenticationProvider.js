import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthenticationContext = createContext();

const AuthenticationProvider = async ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const navigate = useNavigate();
    const login = async (data) => {
        try {
            const response = await axios.post(
                "https://blumafricabackend-production.up.railway.app/login",
                { email: data.email, password: data.password },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );

            const returnResponse = response.data;

            if (returnResponse.data) {
                setUser(returnResponse.data.user);
                setToken(returnResponse.token);
                localStorage.setItem("token", returnResponse.token);
                console.log(returnResponse.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AuthenticationContext.Provider value={{ token, user, login }}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export default AuthenticationProvider;

export const useAuth = () => {
    return useContext(AuthenticationContext);
};
