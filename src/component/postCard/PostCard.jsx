import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div``;
const ImageContainer = styled.div`
  max-width: 900px;
`;
const Image = styled.img`
  width: 100%;
`;
const Heading = styled.div`
  font-size: 28px;
  font-weight: bolder;
  border-bottom: 2px solid rgb(244, 167, 244);
  margin-bottom: 5px;
`;
const Text = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const UserPic = styled.img``;
const UserName = styled.span``;
const UserInfo = styled.div``;

const PostCard = (props) => {
  return (
    <Container>
      <Wrapper>
        <UserInfo>
          <UserPic src={props.profilePic} />
          <UserName>{props.username}</UserName>
        </UserInfo>
        <Heading>{props.title}</Heading>
        <ImageContainer>
          <Image src={props.postImg} />
        </ImageContainer>
        <Text>{props.textContent}</Text>
      </Wrapper>
    </Container>
  );
};

export default PostCard;
