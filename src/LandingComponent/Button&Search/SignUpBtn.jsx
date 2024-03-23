import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const ActionBtn = styled.button`
  border-radius: 10px;
  background-color: rgb(129, 52, 201);
  padding: 10px;
  font-size: 20px;
  width: 8rem; 

  // &:hover {
  //   background-color: rgb(160, 95, 221);
  // }
`;

function SignUpBtn() {
  const navigate = useNavigate();
  function goToSignUpPage() {
    navigate("/LoginAndSignUp");
  }
  return (

    <Link to="/signup">
      <div className="sign-up">
        <ActionBtn onClick={goToSignUpPage}>Sign up</ActionBtn>
      </div>

    </Link>
  );
}

export default SignUpBtn;
