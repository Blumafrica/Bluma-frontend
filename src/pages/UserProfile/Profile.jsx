import React from "react";
import BlumaLogo from "../../LandingComponent/Button&Search/BlumaLogo";
import SearchBar from "../../LandingComponent/Button&Search/SearchBar";
import notificationBell from "../../LandingComponent/assets/notifcations 1.svg";
import profilePic from "../../LandingComponent/assets/profile.svg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  padding: 3rem;
`;
const HeadText = styled.div``;
const Wrapper = styled.div`
  border: 2px solid red;
  display: flex;
  height: 100%;
  border-radius: 10px;
`;
const NavBar = styled.nav`
  border-right: 2px solid blue;
  flex: 2;
`;
const ProfileImageArea = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
`;
const Img = styled.img`
  display: block;
`;
const Content = styled.section`
  flex: 8;
`;
const Input = styled.input`
  border: 1px solid gray;
  display: block;
  margin-bottom: 5px;
`;
const List = styled.li`
  text-decoration: none;
  list-style: none;
`;
const Header = styled.div`
  //   border: 1.5px solid green;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-item: center;
`;

const Profile = () => {
  return (
    <Container>
      <Wrapper>
        <NavBar>
          <BlumaLogo />
          <List>
            <NavLink>Dashboard</NavLink>
          </List>
          <List>
            <NavLink>Post</NavLink>
          </List>
          <List>
            <NavLink>Sign out</NavLink>
          </List>
        </NavBar>
        <Content>
          <Header>
            <HeadText>User Profile</HeadText>
            <SearchBar />
            <ProfileImageArea>
              <Img src={notificationBell} />
              <Img src={profilePic} />
            </ProfileImageArea>
          </Header>
          <Input type="text"></Input>
          <Input type="text"></Input>
          <Input type="text"></Input>
          <Input type="text"></Input>
          <Input type="text"></Input>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Profile;
