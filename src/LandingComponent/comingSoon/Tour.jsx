import React, { useState } from "react";
import tourPic from "../assets/tour3.jpg";
import "./Tour.css";
import styled from "styled-components";

const Container = styled.div``;
const TextArea = styled.div`
  flex: 1;
`;
const ImageArea = styled.div`
  flex: 1;
`;
const Image = styled.img``;
const List = styled.li``;
const Wrapper = styled.div`
  color: black;
  border: 2px solid red;
  max-width: 900px;
  display: flex;
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
            <h1>Take a tour </h1>
            <List id="1">things rthat we do</List>
            <List id="2">things rthat we do</List>
            <List id="3">things rthat we do</List>
          </TextArea>
          <ImageArea>
            {/* <img src={tourPic} alt="" style={{height:"40rem"}}/> */}
          </ImageArea>
        </Wrapper>
      </Container>
    </div>
  );
}

export default Tour;
