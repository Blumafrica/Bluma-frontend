
import React, { useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik, Form } from "formik";
import * as Yup from 'yup'
import '../pages/SignUp.css'


function SignUp() {
  
  const navigate = useNavigate();
  

  const [initialValue, setInitialValue] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  })
  const [emailError, setEmailError ] = useState("")
  const [nameError , setNameError] = useState('')
  const [passwordError , setPasswordError] = useState("")


   const SignUpValidation = Yup.object({
    username: Yup.string().min(6).required("Please Enter a Username"),
    email: Yup.string().email("Please Enter a Valid Email").required("Please Enter an Email"),
    password: Yup.string().min(4).required("Please Enter a Password"),
  })

  const {handleBlur, handleChange, handleSubmit, values , errors} = useFormik({
  
    initialValues: initialValue,
    validationSchema: SignUpValidation,
    onSubmit: (values) =>{
      console.log("user inputs => ",values)
      handleSubmits();
    }
  })
  

  const navigateToHomePage = useCallback((param) => {
    navigate("/HomePage", { state: { value: param } });
  }, [navigate]);

  async function handleSubmits(e) {
    e.preventDefault();

      try {
        const response = await axios.post(
            "https://blumafricabackend-production.up.railway.app/api/v1/user/register",
            {initialValue},
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
        );
      

        const { id, message, token } = response.data;
        localStorage.setItem("authToken", token);
        console.log("Message -> ", message);
        console.log("Token -> ", token);
        console.log("Id -> ", id);
        navigateToHomePage(id);
      } catch (err) {
        console.error(err);

      }
    
  }

  return (
      <div className="sign-up"> 
        <div className="image">
            <p className="bluma-tag">BLUMA</p>
        </div>
        <div className="input-field">
          <form >

            <p className="error">{errors.username}</p>
            <input
                className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl  space-x-2 md:space-x-8"
                type="text"
                placeholder="Username"
                value={values.username}
                name="username"
                onChange={handleChange}
                // onChange={(e) => setInitialValue({ ...initialValue, username: e.target.value})}
                onBlur={handleBlur}
            />
            <br />

            <p className="error">{errors.email}</p>
            <input
                className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}/>
            <br />

            <p className="error">{errors.password}</p>
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
           
            <input
                type="submit"
                className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-purple-400 text-center text-xl"
                onClick={handleSubmit}
            />
          </form>
        </div>
      </div>
  );
}


export default SignUp;


