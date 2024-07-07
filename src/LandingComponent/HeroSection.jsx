import { useEffect, useState } from "react";
import styled from "styled-components";
import "./heroSection.css";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";


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
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
    const navigate =  useNavigate()


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

    // width: 100%;
    // height: 100vh;
    // display: flex;
    // position: relative;
    // overflow: hidden;

  return (
    <div
        id={'container'}
    >
        <Bg>
          <div
              style={{backgroundColor: 'rgba(255, 255, 255, 0.2)',margin: 'auto', borderRadius: '10px 10px 10px 10px' }}
              className={` flex w-[40%] h-[40%] md:w-[40%] `}>
                {/*<div id='text'>*/}
                {/*  Nigeria is a multinational state inhabited by more than 250 ethnic groups speaking 500 distinct languages*/}
                {/*  Nigeria is a multinational state inhabited by more than 250 ethnic groups speaking 500 distinct languages*/}
                {/*</div>*/}
              <div
                  // style={{gridTemplateColumns : '80% 20%'}}
                  className={` w-[100%]  grid grid-rows-2 gap-20 justify-self-end  place-content-center    `}>
                  <div className={`flex  w-[100%] `}>
                      <span className={`w-auto font-bold text-16`}>
                        Learn more about Nigeria, Xplore Nigeria
                      </span>

                  </div>
                  <div className={`flex w-[100%] gap-4  justify-self-stretch`}>
                      <Button
                      variant='contained'
                      sx={{backgroundColor: 'black',width: '8rem', height: '3rem', textTransform: 'none', fontSize: 16,
                          '&:hover': {backgroundColor: 'black'},
                         }}
                      onClick={()=> {navigate('/SignUp')}}
                  >
                     <span > Sign up</span>
                  </Button>
                  <Button
                      variant='contained'
                      sx={{
                          backgroundColor: 'white',color: 'black',width: '8rem', height: '3rem', fontSize: 16, textTransform: 'none',
                          '&:hover': {backgroundColor: 'white'},
                       }}
                      onClick={()=> {navigate('/Login')}}

                  >
                      <span >Login</span>
                  </Button>
                  </div>

              </div>

          </div>
        </Bg>
    </div>
  );
};

export default HeroSection;
