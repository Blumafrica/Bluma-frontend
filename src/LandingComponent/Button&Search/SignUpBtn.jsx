import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 10px;
  background-color: rgb(129, 52, 201);
  padding: 10px;
  font-size: 24px;

  &:hover {
    background-color: rgb(160, 95, 221);
  }
`;

function SignUpBtn() {
  const navigate = useNavigate();
  function goToSignUpPage() {
    navigate("/LoginAndSignUp");
  }
  return (
    <Link to="/signup">
      <div className="sign-up">
        <Button onClick={goToSignUpPage}>Sign up</Button>
      </div>
    </Link>
  );
}

export default SignUpBtn;
