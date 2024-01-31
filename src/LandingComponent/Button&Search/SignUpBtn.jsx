import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignUpBtn() {
  const navigate = useNavigate();
  function goToSignUpPage(){
    navigate("/LoginAndSignUp")
  }
  return (
    <Link to="/SignUp">
    
      <div className='sign-up'><button onClick={goToSignUpPage}>Sign up</button></div>
    </Link>
  )
}

export default SignUpBtn