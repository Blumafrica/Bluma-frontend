import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./signin.css"
import styled from 'styled-components'

const Button = styled.button`
  border: 1px solid gray;
  padding: 10px;
`;

function SignInBtn() {
  const navigate =useNavigate()
  function goToSignInPage(){
    navigate("/LoginAndSignUp")
  }
  return (
    <div className='sign-in'><Button onClick={goToSignInPage}>Sign in</Button></div>
  )
}

export default SignInBtn