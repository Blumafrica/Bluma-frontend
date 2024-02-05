import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
`;
const Wrapper = styled.div`
text-align: center;
`;
const List = styled.li`
list-style: none;
font-size: 34px;
padding: 10px;
`;
const BackBtn = styled.button``;

const MobileNav = () => {
const navigate = useNavigate()
const backHome =()=>{
  navigate("/")
}
  return (
    <Container >
      <BackBtn onClick={backHome}>Back</BackBtn>
      <Wrapper>
        <List>
          <Link to="/Login">Login</Link>
        </List>
        <List>
          <Link to="/About">About</Link>
        </List>
        <List>
          <Link to="/Products">Products</Link>
        </List>
        <List>
          <Link to="/Events">Events</Link>
        </List>
      </Wrapper>
    </Container>
  );
};

export default MobileNav;
