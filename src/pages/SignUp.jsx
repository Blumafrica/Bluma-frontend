import React, { useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';

function SignUp() {
    const navigate = useNavigate();

    const SignUpValidation = Yup.object({
        username: Yup.string().min(6).required("Please enter a username"),
        email: Yup.string().email("Please enter a valid email").required("Please enter an email"),
        password: Yup.string().min(4).required("Please enter a password"),
        confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Passwords do not match"),
    });

    const { handleBlur, handleChange, handleSubmit, values, errors } = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: SignUpValidation,
        onSubmit: handleSubmits,
    });

    const navigateToHomePage = useCallback((param) => {
        navigate("/HomePage", { state: { value: param } });
    }, [navigate]);

    async function handleSubmits() {
        const url = "http://localhost:8080/api/v1/user/register"
        try {
             const response = await axios.post(
            //     "https://blumafricabackend-production.up.railway.app/api/v1/user/register",
                 url,
                values,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );

            const { id, message, token,authority } = response.data;
            localStorage.setItem("authToken", token);
            localStorage.setItem("userId",id)
            localStorage.setItem("authority",authority)
            console.log("Message -> ", message);
            console.log("Token -> ", token);
            console.log("Id -> ", id);
            navigateToHomePage(id);
        } catch (err) {
            console.error(err);
             //setErrorMsg(err.response?.data?.message);
        }
    }

    return (
        <div className="sign-up">
            <div className="image"></div>
            <div className="">
                <form onSubmit={handleSubmit}>
                    {errors.username && <small>{errors.username}</small>}
                    <input
                        className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <br />
                    {errors.email && <small>{errors.email}</small>}
                    <input
                        className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <br />
                    {errors.password && <small>{errors.password}</small>}
                    <input
                        className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <br />
                    {errors.confirmPassword && <small>{errors.confirmPassword}</small>}
                    <input
                        className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <br />
                    <input
                        type="submit"
                        className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-purple-400 text-center text-xl"
                    />
                </form>
            </div>
        </div>
    );
}

export default SignUp;
