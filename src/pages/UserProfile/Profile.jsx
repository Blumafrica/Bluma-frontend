import React, { useState, useEffect } from "react";
import BlumaLogo from "../../LandingComponent/Button&Search/BlumaLogo";
import profilePix from "../../images/profilePix.jpg";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  height: 100vh;
  padding: 5rem;
`;

const HeadText = styled.div`
  font-size: 30px;
  font-family: chivo;
  font-weight: 900px;
  word-wrap: break-word;
`;

const Wrapper = styled.div`
  border: 2px solid #7520ec;
  display: flex;
  height: 700px;
  border-radius: 10px;
  padding: 2rem;
`;

const NavBar = styled.nav`
  flex: 5;
`;

const ProfileImageArea = styled.div`
  width: 436;
  height: 413;
  background: transparent;
  border-radius: 50%;
`;

const Img = styled.img`
  background-color: transparent;
  border-radius: 50%;
`;

const Content = styled.section`
  flex: 8;
`;

const List = styled.li`
  text-decoration: none;
  list-style: none;
`;

const Header = styled.div`
  height: 50px;
  justify-content: center;
  font-weight: bold;
  color: #7520ec;
  padding-top: 50px;
  padding-left: 50px;
`;

const RightContent = styled.nav`
  flex: 15rem;
  padding-right: 50px;
  position: relative;
`;

const TextContainer = styled.div`
  background-color: #f786f7;
  text-align: center;
  padding: 50px 30px;
  z-index: -2;
  position: absolute;
  top: 12rem;
  left: 0;
  margin-right: 2.8rem;
`;

const Details = styled.div`
  padding-left: 50px;
`;

const TextInfo = styled.div`
  font-size: 15px;
  font-family: chivo;
`;

const MyButton = styled.div`
  padding-left: 200px;
  padding-top: 90px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ContactBtn = styled.button`
  background-color: white;
  border-color: #7b38d8;
  border-style: solid;
  width: 200px;
  font-size: 15;
  color: black;
  border-radius: 50px;
  padding-bottom: 10px;
  &:hover {
    background-color: #7b38d8;
  }
`;

const Profile = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [profileData, setProfileData] = useState({});

    const displayNumber = () => {
        setPhoneNumber("");
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("your-api-endpoint");
                setProfileData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <Container>
            <Wrapper>
                <NavBar>
                    <BlumaLogo />
                   

                    <br />
                    <br />
                    <Details>
                        <List style={{ fontSize: "20px", fontWeight: "bold" }}>
                            Details
                        </List>

                        <br />
                        <List style={{ fontSize: "15px", fontWeight: "bold" }}>
                            <List>Name: {profileData.name}</List>

                            <br />
                            <List>Gender: {profileData.gender}</List>

                            <br />
                            <List>Age: {profileData.age}</List>

                            <br />
                            <List>Contact: {profileData.contact}</List>

                            <br />
                            <br />
                            <List>
                                About Me:

                                <br />
                                <br />
                            </List>
                        </List>

                        <TextInfo>
                            <p>{profileData.additionalInfo}</p>
                        </TextInfo>
                    </Details>

                    <MyButton>
                        <ContactBtn onClick={displayNumber}> CONTACT ME</ContactBtn>
                        <p>{phoneNumber}</p>
                    </MyButton>
                </NavBar>

                <Content>
                    <Header>
                        <HeadText>PROFILE</HeadText>
                    </Header>
                </Content>

                <RightContent>
                    <ProfileImageArea>
                        <Img onClick={""} src={profilePix} />
                    </ProfileImageArea>
                    <TextContainer>
                        <div className="TextInfo">
                            <p>HELLO, I'M</p>
                            <p>{profileData.name}</p>
                            <p>{profileData.additionalInfo}</p>
                        </div>
                    </TextContainer>
                </RightContent>
            </Wrapper>
        </Container>
    );
};

export default Profile;
