import { useEffect, useState } from "react";
import styled from "styled-components";
import "./heroSection.css";
import Button from "@mui/material/Button";


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
 
`;

const Bg = styled.div`
  color: white;
  width: 100vw;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;

  //background-image: url('https://images.pexels.com/photos/18431669/pexels-photo-18431669/free-photo-of-market-in-ibadan-city.jpeg?auto=compress&cs=tinysrgb&w=600');
  background-size: contain;
  background-image: url('https://i.pinimg.com/236x/76/0e/37/760e37ff004541f8246c2be8985ed6a2.jpg');
  //background-image: url('https://i.pinimg.com/236x/28/86/ba/2886ba8764521255fc1543664f0f2f4a.jpg');
  //
  //background-repeat: no-repeat;
  //background-size: cover;
`;

const HeroSection = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => handleClick("left"), 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 2));
    } else {
      setSlideIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
    }
  };



  return (
    <Container>
        <Bg>
          <div
              style={{backgroundColor: 'rgba(255, 255, 255, 0.2)',margin: 'auto', borderRadius: '10px 10px 10px 10px' }}
              className={`w-[40%] h-[40%] grid `}>
                <span id='text'>
                  Nigeria is a multinational state inhabited by more than 250 ethnic groups speaking 500 distinct languages
                  Nigeria is a multinational state inhabited by more than 250 ethnic groups speaking 500 distinct languages
                </span>
              <div className={`flex`}>
                  <Button>
                      sign up
                  </Button>
                  <Button>
                      Login
                  </Button>
              </div>

          </div>
        </Bg>
    </Container>
  );
};

export default HeroSection;
