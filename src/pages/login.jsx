import '../pages/login.css'
import { useState } from "react";
import { useFormik, Formik } from "formik";
import * as Yup from 'yup'
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [initialValue, setInitialValue ] = useState({
    email: '',
    password : ''
  })
  const loginValidation = Yup.object({
    email: Yup.string().email("please enter an email").required("please enter email"),
    password: Yup.string("please enter password").required("please enter your password")
  })
  const {handleSubmit, handleBlur, values, errors, handleChange } = useFormik({
    initialValues: initialValue,
    validationSchema: loginValidation,
    onSubmit: (values) =>{
      console.log("user inputs => " ,values)
      logIn(values)
    }
  })


  async function logIn( userData ) {
    try {
      // e.preventDefault();
      const response = await fetch("/api/v1/user/login", {
        method: 'POST',
         headers : {"Content-Type" : "application/json"},
        body: JSON.stringify(userData)

      })
      if(response.ok){
        const {userId, userAuthority} = response.json()
        localStorage.setItem("userId", userId);
        localStorage.setItem("userAuthority" , userAuthority)
      }
    }catch(error){

    }
  }

    

  return (
    <div className="login">
      <div className="background-image"></div>
       {/* <div className="container"> */}
         <form onSubmit={handleSubmit}>
          <p color="red" margin-left={'20px'}className="error">{errors.email}</p>
          <input
          class="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl items-start"
          type="email"
          placeholder="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          ></input>
          <br></br>
          <p color="red" margin-left={'20px'} className="error">{errors.password}</p>
          <input
          class="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl items-center"
          type="password"
          placeholder="password"
          name="password"
          value={values.password} 
          onChange={handleChange}
          onBlur={handleBlur}
          ></input>
          {/* <input className="input" background-color={"red"}></input> */}
          {/* <button type="submit" onClick={handleSubmit} className="button">Submit</button> */}
          <button className="submit" onClick={handleSubmit}>Submit</button>
         </form>
         {/* </div> */}

      <form onSubmit={handleSubmit}>
        <input
          class="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br></br>
        <input
          class="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
          type="password"
          placeholder="password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button >Submit</button>
      </form>
      <br></br>
    </div>
  );
}
  



export default Login;