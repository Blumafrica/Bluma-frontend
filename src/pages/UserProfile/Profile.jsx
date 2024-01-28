// import React, { useState } from "react";
// import BlumaLogo from "../../LandingComponent/Button&Search/BlumaLogo";
import profilePix from "../../images/Kashim.jpg";
import facebook from "../../images/facebook 1.jpg"
import twitter from "../../images/twitter 1.jpg"
import insta from "../../images/instagram 1.jpg"
import linkedin from "../../images/twitter 1.jpg"
// import styled from "styled-components";
import HomeHeader from "../../layout/HomeHeader";
// const Container = styled.div`
//   height: 100vh;
//   padding: 5rem;

// `;

// const HeadText = styled.div`
// font-size: 30px;
// font-family: chivo;
// font-weight:900px;
// word-wrap: break-word;

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
//    width: 436;
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
//   // border: 1.5px solid green;
//   height: 50px;
  
//   justify-content: center;

//   font-weight: bold;
//   color: #7520ec ;
//   padding-top: 50px;
//   padding-left: 50px;
// `;


// const RightContent = styled.nav`
//   flex: 15rem;
//   padding-right: 50px;
//   position: relative;
// `;

// const TextContainer = styled.div`
//   background-color: #f786f7 ;
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
//   font-size:15px;
//   font-family: chivo;
// `;

// const MyButton = styled.div`
//   padding-left: 200px;
//   padding-top: 90px;
//   display: flex;
//   align-items: center;
//   gap:10px;
// `;

// const ContactBtn =styled.button`
//     background-color:white; 
//     border-color:#7b38d8;
//     border-style:solid;
//     width:200px;
//     font-size:15;
//     color:black;
//     border-radius:50px;
//     padding-bottom:10px;
//     &:hover{
//       background-color:#7b38d8;
//     }  
              
// `;

export default function Profile(){
  // const [phoneNumber, setPhoneNumber]= useState("")
  // const displayNumber =() =>{
  //   setPhoneNumber("")
  // }
  return (
    <>
     <HomeHeader/>
     <h1 className="text-5xl font-bold text-purple-500 text-center font-mono">PROFILE</h1>
    <div className="md:grid md:grid-cols-2 xl:grid xl:grid-cols-2">
      <div className="userDetailes">
          <div className="m-3">
          <h2 className="font-mono text-4xl text-bold m-3">Details</h2>
          <label className="font-mono text-bold text-3xl mt-4">Name</label>
          <p className="text-2xl fon-mono m-3">Ebube John Enyi</p>
          <label className="font-mono text-bold text-3xl mt-4">Age</label>
          <p className="text-2xl fon-mono m-3">32 years</p>
          <label className="font-mono text-bold text-3xl mt-4">Location</label>
          <p className="text-2xl fon-mono m-3">Hebert Marculay Way, Yaba Lagos State</p>
          </div>
          <div className="mt-10 m-3">
          <label className="font-mono text-bold text-3xl mt-4">About Me</label>
          <p className="text-2xl fon-mono m-3">I am a nigerian who it's the stories and 
            traditions slipping away. Yet, in acknowledging 
            this loss, we find an opportunity for renewal. 
            As custodians of our cultural tapestry, let's 
            unite to breathe life into fading traditions. 
            Through education</p>
          </div>
          <div className="flex">
              <img className="m-4 rounded-xl cursor-pointer" src={facebook} alt="F"/>
              <img className="m-4 rounded-xl cursor-pointer" src={twitter} alt=""/>
              <img className="m-4 rounded-xl cursor-pointer" src={insta} alt=""/>
            </div>
            <div className="flex justify-center cursor-pointer">
            <p className="p-4 m-3 border-2 border-purple-400 w-52 text-center rounded-full text-2xl font-semibold">CONTACT ME</p>
            </div>
      </div>
      <div>
        <div className="relative">
          <div className="flex justify-center absolute md:left-60 xl:left-60">
            <img className="xl:w-72 rounded-full md:h-72 xl:h-72" src={profilePix} alt="Profile Picture"></img>
          </div>
          <div className="flex justify-center">
          <div className="w-3/6 bg-purple-500/80 p-3 mt-56">
            <div className="mt-14">
            <p className="text-4xl font-mono text-white font-bold">Hello, I'm </p>
            <p className="text-4xl font-mono text-white font-bold">Ebube John Enyi</p>
            </div>
            <p className="text-2xl">I am a nigerian who it's the stories and 
            traditions slipping away. Yet, in acknowledging 
            this loss, we find an opportunity for renewal. 
            As custodians of our cultural tapestry, let's 
            unite to breathe life into fading traditions. 
            Through education</p>
            <div className="flex justify-center">
              <img className="m-4 rounded-xl cursor-pointer" src={facebook} alt="F"/>
              <img className="m-4 rounded-xl cursor-pointer" src={twitter} alt=""/>
              <img className="m-4 rounded-xl cursor-pointer" src={insta} alt=""/>
              <img className="m-4 rounded-xl cursor-pointer" src={linkedin} alt=""/>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
    // <>
    // {
    /* <HomeHeader/>
    <Container>
    <Content style={{display: 'flex', justifyContent: 'center'}}>
          <Header >
            <HeadText>PROFILE</HeadText>
          </Header>
        </Content>
      <Wrapper>
        <NavBar>
          <br />
          <br />
          <Details>
          <List style = {{fontSize:'20px', fontWeight:'bold'}}>
            Details          
          </List>

          <br />
          <List style={{fontSize:'15px', fontWeight:'bold'}}>
          <List>
            Name:
          </List>

          <br />
          <List>
            Gender:
          </List>

          <br />
          <List>
            Age:
          </List>

          <br />
          <List>
            Contact:
          </List>

          <br />
          <br />
          <List>
            About Me:

            <br />
            <br />
          </List>
           </List>

           <TextInfo> 
            <p>I am a nigerian who enjoys enjoys Nigeria </p>
            <p>beautiful heritage. Stay on my page,</p>
            <p> learn,and enjoy while i take you around Nigeria</p>
            <p>cheers</p>
            </TextInfo>
          </Details>  

          <MyButton>
           <ContactBtn onClick={displayNumber}> CONTACT ME</ContactBtn>
           <p>{phoneNumber}</p>
          </MyButton>       
          
        </NavBar>
        
        <RightContent>
          <ProfileImageArea>
              <Img onClick={""} src={profilePix} />
            </ProfileImageArea>
          <TextContainer>
            <div className="TextInfo"> 
            <p>HELLO, I'M</p>
            <p>JOHN EBUBE ENYI</p>
            <p>I am a nigerian who</p>
            <p>enjoys her beautiful heritage</p>
            <p>stay on my page learn,and enjoy</p>
            <p>while i take you around Nigeria</p>
            <p>cheers</p>
            </div>
          </TextContainer>
        </RightContent>
      </Wrapper>
    </Container>
    </> */
  // }
  );
};
