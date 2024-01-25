import React, { useState } from "react";
import tourPic from "../assets/tour3.jpg";
import "./Tour.css";
import img from "./asset/design.svg";
import styled from "styled-components";

const Container = styled.div`
  padding: 5rem 0;
`;
const TextArea = styled.div`
  flex: 8;
`;
const TextContent = styled.h1`
  font-size: 64px;
  font-weight: 700;
  /* font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif; */
  letter-spacing: 0.5px;
  color: ${(props) => (props.color ? "Teal" : "rgb(129, 52, 201)")};

  @media screen and (max-width: 1150px) {
    font-size: 46px;
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;
const ImageArea = styled.div`
  @media screen and (max-width: 1690px) {
    display: none;
  }
`;
const Paragraph = styled.p`
  font-size: 32px;
  color: #626060;
  font-weight: 300px;

  @media screen and (max-width: 1150px) {
    font-size: 28px;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
const Button = styled.button`
  padding: 15px;
  border-radius: 15px;
  border: 2px solid rgb(129, 52, 201);
  color: rgb(129, 52, 201);
  margin-top: 1rem;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: rgb(179, 143, 213);
    border: 2px solid rgb(179, 143, 213);
  }

  @media screen and (max-width: 1150px) {
    font-size: 22px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Image = styled.img``;
const List = styled.li``;
const Wrapper = styled.div`
  max-width: 80%;
  display: flex;
  margin: auto;
  padding: 3rem;
  gap: 1rem;
`;

function Tour() {
  const [pic, setPic] = useState(tourPic);
  function changeImages() {
    if (pic == tourPic) {
    }
  }
  return (
    <div className="tour">
      <Container>
        <Wrapper>
          <TextArea>
            <TextContent color="true">Explore our offerings soon. </TextContent>
            <TextContent>Take a tour</TextContent>
            <Paragraph>
              Here at bluma, The only place where you can get the joy and
              happiness of Nigeria .Come letes take you on a ride to see all the
              beauties of Nigeria.
            </Paragraph>
            <Button>Click here to book ( coming soon)</Button>
          </TextArea>
          <ImageArea>
            <Image src={img} />
          </ImageArea>
        </Wrapper>
      </Container>
    </div>
  );
}

export default Tour;
