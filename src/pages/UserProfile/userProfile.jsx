import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { users } from "../UserProfile/metaData";
import styled from "styled-components";
import profilePix from "../../images/profilePix.jpg";
import axios from "axios";
import BlumaLogo from "../../LandingComponent/Button&Search/BlumaLogo";

const MainContainer = styled.div`
  border: 2px solid #7520ec;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: grid;
  justify-content: space-between;
  align-items: flex-start;
  background-color: white;
`;

const LeftContents = styled.div`
  text-align: left;
  padding-top: 3rem;
  padding-left: 2rem;
`;

const CenterContents = styled.div`
  display: flex;
  padding-top: 3rem;
  justify-content: center;
`;

const UserProfile = styled.div`
  font-size: 30px;
  color: black;
  padding-left: 10rem;
`;

const ProfilePicture = styled.div`
  border-radius: 20%;
  width: 50%;
  height: 20%;
  padding-left: 10rem;
  padding: 3rem;
`;

const UserPicture = styled.img`
  border-radius: 50%;
  width: 50%;
  height: 50%;
  object-fit: cover;
`;

const EditButton = styled.div`
  padding-left: 200px;
  padding-top: 90px;
  padding-left: 60px;
  align-items: center;
  padding-bottom: 50px;
  gap: 10px;
`;

const ContactBtn = styled.div`
  background-color: white;
  border-color: #7b38d8;
  border-style: solid;
  width: 150px;
  font-size: 15px; /* Fixed missing unit */
  color: black;
  border-radius: 50px;
  padding-bottom: 10px;
  text-align: center;

  &:hover {
    background-color: #7b38d8;
  }
`;

const RightContents = styled.div`
  padding-left: 10rem;
  padding-bottom: 20rem;
  height: 70%;
  width: 90%;
  flex-direction: column;
  justify-content: flex-start;
`;

const MetaData = styled.div``;

const Profile = () => {
    const [fullName, setFullName] = useState(users[0].name);
    const [age, setAge] = useState(users[0].age);
    const [gender, setGender] = useState(users[0].gender);
    const [contact, setContact] = useState(users[0].contact);
    const [about, setAbout] = useState(users[0].about);
    const [currentDate, setCurrentDate] = useState("");
    const [profileData, setProfileData] = useState({});
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("./pages/HomePage");
    };

    useEffect(() => {
        const formattedDate = new Date().toLocaleDateString();
        setCurrentDate(formattedDate);
    }, []); // Fixed the dependency array

    useEffect(() => {
        const fetchData = async () => {
            const token = "your_valid_token"; // Replace with a valid token
            try {
                const response = await axios.post(
                    "http://localhost:8080/api/v1/user/profile",
                    { fullName, age, gender, contact, about },
                    {
                        "Content-Type": "application/json", // Fixed header
                        Authorization: `Bearer ${token}`,
                    }
                );
                setProfileData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [fullName, age, gender, contact, about]); // Added dependencies

    return (
        <MainContainer>
            <LeftContents>
                <BlumaLogo />
                <UserProfile>My Profile</UserProfile>
            </LeftContents>

            <CenterContents>
                <ProfilePicture>
                    <UserPicture onClick={navigateToHome} src={profilePix} />
                    <EditButton>
                        <ContactBtn onClick={navigateToHome}> Edit Profile</ContactBtn>
                    </EditButton>
                </ProfilePicture>

                <RightContents>
                    <MetaData>
                        <h4 style={{ fontWeight: "bold" }}>Full Name</h4>{" "}
                        <span>{fullName}</span>
                        <h4 style={{ fontWeight: "bold" }}>Gender</h4> <span>{gender}</span>
                        <h4 style={{ fontWeight: "bold" }}>Age</h4> <span>{age}</span>
                        <h4 style={{ fontWeight: "bold" }}>Contact</h4>{" "}
                        <span>{contact}</span>
                        <h4 style={{ fontWeight: "bold" }}>About</h4> <span>{about}</span>
                        <h4 style={{ fontWeight: "bold" }}>Joined On</h4>
                        <p>{currentDate}</p>
                    </MetaData>
                </RightContents>
            </CenterContents>
        </MainContainer>
    );
};

export default Profile;
