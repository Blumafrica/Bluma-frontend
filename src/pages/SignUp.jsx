
import React, { useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik, Form } from "formik";
import * as Yup from 'yup'
function SignUp() {
  
  const navigate = useNavigate();
  

  const [initialValue, setInitialValue] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  })
  const SignUpValidation = Yup.object({
    username: Yup.string().min(6).required("please enter a username"),
    email: Yup.string().email("please enter a valid email").required("please a enter an email"),
    password: Yup.string().min(4).required("please enter a password"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password")], "password not matched")
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
        // setErrorMsg(err.message); // Assuming error has a 'message' property
      }
    
  }

  return (
      <div className="sign-up"> 
        <div className="image">

        </div>
        <div className="">
          <form >
            
            {errors.username && <small>{errors.username}</small>}
            <p>{errors.username}</p>
            
           
            <input
                className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
                type="text"
                placeholder="Username"
                // value={values.username}
                name="username"
                onChange={(e) => setInitialValue({ ...initialValue, username: e.target.value})}
                // onBlur={handleBlur}
            />
            <br />
             <p>{errors.username}</p>
            {errors.email && <small>{errors.email}</small>}
             <p>{errors.email}</p>
          
          
            <input
                className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
                type="email"
                placeholder="Email"
                name="email"
                // value={values.email}
                // onBlur={handleBlur}
                onChange={(e) => setInitialValue({ ...initialValue, email: e.target.value})}
            />
            <br />
           <p>{errors.email}</p>
            {errors.password && <small>{errors.password } ooooo</small>}
             <p>{errors.password} oooo</p>
           
          
            <input
                className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
                type="password"
                placeholder="Password"
                name="password"
                // value={values.password}
                // onChange={handleChange}
                // onBlur={handleBlur}
                onChange={(e) => setInitialValue({... initialValue, password: e.target.value}) }
            />
            <br />
            <p>{errors.password}</p>
           
             {errors.confirmPassword && <small>{errors.confirmPassword}</small>}
            <p>{errors.confirmPassword}</p>
            {/* <input? */}
            {/* //     className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
            //     type="password"
            //     placeholder="Confirm Password"
            //     name="confirmpassword"
            //     value={values.confirmPassword}
            //     onChange={(e) => setInitialValue( {... initialValue, })}
            //     // onBlur={handleBlur}
            // />
            // <br /> */}
            <p>{errors.confirmPassword}</p>
            <input
                type="submit"
                className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-purple-400 text-center text-xl"
                onClick={handleSubmits}
            />
          </form>
        </div>
      </div>
  );
}


export default SignUp;


