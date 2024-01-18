import { useEffect, useState } from "react";
import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowBackIos";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowForwardIos";
import { Slideritems } from "./data";
import SignUpBtn from "./Button&Search/SignUpBtn";
import "./heroSection.css";
import NavBar from "./NavBar";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  visibility: hidden;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Caption = styled.div`
  font-size: 42px;
  font-weight: 700;
`;
const TextContent = styled.div`
  max-width: 1200px;
  margin: 10% auto;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2.5rem;
  border-radius: 5px;

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }
`;
const Heading = styled.h1``;
const Text = styled.p`
  letter-spacing: 1.5px;
  font-size: 20px;
`;
const HeroBtn = styled.button``;
const Slide = styled.div`
  color: white;
  width: 100vw;
  height: 100%;
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
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {Slideritems.map((item) => (
          <Slide bg={item.bg} identity={item.id} className={item.class}>
            <TextContent>
              <Caption>Seamless</Caption>
              <Heading>{props.header}</Heading>
              <Text>{item.desc}</Text>
              <div style={{display: "flex", margin: "3rem 0rem",}}>
                <SignUpBtn>Get Started</SignUpBtn>
                <HeroBtn>View more</HeroBtn>
              </div>
            </TextContent>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default HeroSection;
