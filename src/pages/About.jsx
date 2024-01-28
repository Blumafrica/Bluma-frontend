import React from "react";
import HomeHeader from "../layout/HomeHeader";
import styled from "styled-components";

const Details = styled.div`
  flex: 5;
  justify-content: center;
  padding-left: 25px;
  border: 2px dotted #7520ec;

`;


const Logo= styled.div`
  padding-left: 1px
  `;

const Container = styled.div`
  height: 100vh;
  padding: 5rem;
  border: 2px solid #7520ec;
  background-color:ash;
`;

const About = () => {

  return (
    <>
      <HomeHeader/>
    <Container>
      <Details>
      <h1 style={{fontWeight:'bold', fontSize:'25px', textAlign:'center', display:'block'}}>
      About
      </h1>
      <br />
      <br />
      <br />
      <h2 style={{fontStyle:'italic'}}> Welcome to Bluma-Africa, a platform designed to
        capture and celebrate the unparalleled beauty 
        of Nigeria. Our app is more than just a virtual space; 
        it's a vibrant community where individuals 
        from around the world come together to explore, 
        share, and appreciate the rich cultural heritage 
        and breathtaking landscapes of Nigeria.

        At Bluma-Africa, we believe in the power of storytelling, visuals, and community engagement. 
        Our users contribute to the platform by sharing articles that delve into the heart of Nigeria's charm, 
        posting mesmerizing videos and pictures that showcase its scenic wonders, and engaging in lively 
        conversations that foster a sense of connection and understanding.

        What sets us apart is our dedication to providing a comprehensive experience. Whether you're a seasoned 
        traveler, an aspiring writer, or someone who simply appreciates the beauty of diverse cultures, 
        Bluma-Africa invites you to take a virtual tour of Nigeria through the eyes of those who cherish it. 
        Join us in celebrating the richness and diversity that make Nigeria truly extraordinary.

        Explore, connect, and share your love for Nigeria at Bluma-Africa - where the beauty of Nigeria comes to life!"</h2>

      </Details>
    </Container>
    </>
    

  );
}

export default About;
