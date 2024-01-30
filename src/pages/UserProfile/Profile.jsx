
import React,{useState, useEffect} from "react";
i
import React,{useState, useEffect} from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import {users} from "../UserProfile/metaData"
import styled from "styled-components";
import profilePix from "../../images/profilePix.jpg";
import axios from "axios";
import BlumaLogo from "../../LandingComponent/Button&Search/BlumaLogo";
 
const MainContainer = styled.div`
    /* height: 100vh; */
    
    border: 2px solid #7520ec;
    width: 100%; 
    height: 100vh; 
    overflow: hidden;
    display: grid;
    justify-content: space-between;
    align-items: flex-start;
    background-color:  #e2d7e2;

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
    height:20%;
    padding-left: 10rem; 
    padding: 3rem;
`;
const UserPicture = styled.img`
    border-radius: 50%; 
    width: 50%;
    height: 50%;
    object-fit: cover; 
    
 `;
 const EditButton= styled.div`
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
    font-size: 15;
    color: black;
    border-radius: 50px;
    padding-bottom: 10px;
    text-align: center;
   
    &:hover {
    background-color: #7b38d8;
    }`;

const RightContents = styled.div`
    padding-left: 10rem;
    padding-bottom:20rem ; 
    
    height: 70%;
    width: 90%; 

    flex-direction: column;
    justify-content: flex-start;
`;
const MetaData = styled.div`
  
   
`;

const Profile = ()=>{

    // const {user, loading} = useSelector(state => state.auth)
    const [fullName, setFullName] = useState(users[0].name)

    const [age, setAge] = useState(users[0].age)

    const [gender, setGender] = useState(users[0].gender)

    const [contact, setContact] = useState(users[0].contact)

    const [about, setAbout] = useState(users[0].about)

    const [currentDate, setCurrentDate] = useState("");

    const [profileData, setProfileData] = useState({});

    const navigate = useNavigate();
    
    const navigateToHome =()=>{
        navigate('./pages/HomePage')
    }

    useEffect(()=> {
        const formattedDate = new Date().toLocaleDateString();
        setCurrentDate(formattedDate);
    })

    useEffect(() => {
        const fetchData = async () => {
           try {
                const response = await axios.post("your-api-endpoint");
                setProfileData(response.data);
                } catch (error) {
                    console.error("Error fetching data:", error);
                     }
                 };
        
                 fetchData();
    }, []);
    return (
        <MainContainer>
            <LeftContents>
            <BlumaLogo />
                <UserProfile>My Profile</UserProfile>
                
            </LeftContents>

            <CenterContents>
                <ProfilePicture >
                    <UserPicture onClick={navigateToHome} src={profilePix}/> 
                    <EditButton>
                    <ContactBtn onClick={navigateToHome}> Edit Profile</ContactBtn>              
                    </EditButton>
                </ProfilePicture>
                    
                    <RightContents>
                        <MetaData >
                        <h4 style={{fontWeight:'bold'}}>Full Name</h4> <span>{fullName}</span>
                        <h4 style={{fontWeight:'bold'}}>Gender</h4> <span>{gender}</span>
                        <h4 style={{fontWeight:'bold'}}>Age</h4> <span>{age}</span>
                        <h4 style={{fontWeight:'bold'}}>Contact</h4> <span>{contact}</span>
                        <h4 style={{fontWeight:'bold'}}>About</h4> <span>{about}</span>
                        <h4 style={{fontWeight:'bold'}}>Joined On</h4>
                            <p>{currentDate}</p>

                        </MetaData>
                        
                    </RightContents>   
                        
            </CenterContents>          
            
        </MainContainer>   
  
    )

}

export default Profile;



// import React, { useState, useEffect } from "react";
// import BlumaLogo from "../../LandingComponent/Button&Search/BlumaLogo";
// import profilePix from "../../images/profilePix.jpg";
// import styled from "styled-components";
// import axios from "axios";

// const Container = styled.div`
//   height: 100vh;
//   padding: 5rem;
// `;

// const HeadText = styled.div`
//   font-size: 30px;
//   font-family: chivo;
//   font-weight: 900px;
//   word-wrap: break-word;
// `;

// const Wrapper = styled.div`
//   border: 2px solid #7520ec;
//   display: flex;
//   height: 700px;
//   border-radius: 10px;
//   padding: 2rem;
// `;

// const NavBar = styled.nav`
//   flex: 5;
// `;

// const ProfileImageArea = styled.div`
//   width: 436;
//   height: 413;
//   background: transparent;
//   border-radius: 50%;
// `;

// const Img = styled.img`
//   background-color: transparent;
//   border-radius: 50%;
// `;

// const Content = styled.section`
//   flex: 8;
// `;

// const List = styled.li`
//   text-decoration: none;
//   list-style: none;
// `;

// const Header = styled.div`
//   height: 50px;
//   justify-content: center;
//   font-weight: bold;
//   color: #7520ec;
//   padding-top: 50px;
//   padding-left: 50px;
// `;

// const RightContent = styled.nav`
//   flex: 15rem;
//   padding-right: 50px;
//   position: relative;
// `;

// const TextContainer = styled.div`
//   background-color: #f786f7;
//   text-align: center;
//   padding: 50px 30px;
//   z-index: -2;
//   position: absolute;
//   top: 12rem;
//   left: 0;
//   margin-right: 2.8rem;
// `;

// const Details = styled.div`
//   padding-left: 50px;
// `;

// const TextInfo = styled.div`
//   font-size: 15px;
//   font-family: chivo;
// `;

// const MyButton = styled.div`
//   padding-left: 200px;
//   padding-top: 90px;
//   display: flex;
//   align-items: center;
//   gap: 10px;
// `;

// const ContactBtn = styled.button`
//   background-color: white;
//   border-color: #7b38d8;
//   border-style: solid;
//   width: 200px;
//   font-size: 15;
//   color: black;
//   border-radius: 50px;
//   padding-bottom: 10px;
//   &:hover {
//     background-color: #7b38d8;
//   }
// `;

// const Profile = () => {
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [profileData, setProfileData] = useState({});

//     const displayNumber = () => {
//         setPhoneNumber("");
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get("your-api-endpoint");
//                 setProfileData(response.data);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <Container>
//             <Wrapper>
//                 <NavBar>
//                     <BlumaLogo />
                   

//                     <br />
//                     <br />
//                     <Details>
//                         <List style={{ fontSize: "20px", fontWeight: "bold" }}>
//                             Details
//                         </List>

//                         <br />
//                         <List style={{ fontSize: "15px", fontWeight: "bold" }}>
//                             <List>Name: {profileData.name}</List>

//                             <br />
//                             <List>Gender: {profileData.gender}</List>

//                             <br />
//                             <List>Age: {profileData.age}</List>

//                             <br />
//                             <List>Contact: {profileData.contact}</List>

//                             <br />
//                             <br />
//                             <List>
//                                 About Me:

//                                 <br />
//                                 <br />
//                             </List>
//                         </List>

//                         <TextInfo>
//                             <p>{profileData.additionalInfo}</p>
//                         </TextInfo>
//                     </Details>

//                     <MyButton>
//                         <ContactBtn onClick={displayNumber}> CONTACT ME</ContactBtn>
//                         <p>{phoneNumber}</p>
//                     </MyButton>
//                 </NavBar>

//                 <Content>
//                     <Header>
//                         <HeadText>PROFILE</HeadText>
//                     </Header>
//                 </Content>

//                 <RightContent>
//                     <ProfileImageArea>
//                         <Img onClick={""} src={profilePix} />
//                     </ProfileImageArea>
//                     <TextContainer>
//                         <div className="TextInfo">
//                             <p>HELLO, I'M</p>
//                             <p>{profileData.name}</p>
//                             <p>{profileData.additionalInfo}</p>
//                         </div>
//                     </TextContainer>
//                 </RightContent>
//             </Wrapper>
//         </Container>
//     );
// };

// export default Profile;
