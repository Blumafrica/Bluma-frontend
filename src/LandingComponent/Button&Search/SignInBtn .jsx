import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./signin.css"

function SignInBtn() {
  const navigate =useNavigate()
  function goToSignInPage(){
    navigate("/LoginAndSignUp")
  }
  return (
    <div className='sign-in'><button onClick={goToSignInPage}>Sign in</button></div>
  )
}

export default SignInBtn