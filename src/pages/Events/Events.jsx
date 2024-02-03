import React from "react";
import BlumaLogo from "../../LandingComponent/Button&Search/BlumaLogo";
import styled from "styled-components";
import { posts } from "../../posts";
import Card from "../../LandingComponent/landingPageCard/Card";
import { Link, useNavigate, NavLink } from "react-router-dom";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  margin: auto;
  position: absolute;
  
`;
const Left = styled.div`
  flex: 2;
`;
const Middle = styled.div`
  flex: 6;
  border: 2px solid rgb(244, 167, 244);
  border-radius: 15px;
  padding: 2rem;
  width: fit-content;
`;
const Right = styled.div`
  flex: 2;
  position: fixed;
  right: 10px;
`;
const Advertising = styled.div`
  padding: 2rem;
`;
const AdvertContent = styled.div`
  background-color: black;
  color: #fff;
  height: 20rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Culture = styled.section``
const Entertainment = styled.section``
const Sport = styled.section``
const Educational = styled.section``

function Events() {
  return (
    <div>
      <nav className="nav-bar">
        <BlumaLogo />
      </nav>
      <Wrapper>
        <Left>
          <NavLink>
            <Culture>Culture</Culture>
          </NavLink>
          <NavLink>
            <Entertainment>Entertainment</Entertainment>
          </NavLink>
          <NavLink>
            <Sport>Sport</Sport>
          </NavLink>
          <NavLink>
            <Educational>Educational</Educational>
          </NavLink>
        </Left>
        <Middle>
          {posts.map((post) => (
            <Link to={`/PostView/${post.id - 1}`}>
              <Card
                heading={post.title}
                coverPic={post.imgUrl}
                description={post.content}
              />
            </Link>
          ))}
        </Middle>
        <Right>
          <Advertising>
            <AdvertContent>Advertise Here</AdvertContent>
          </Advertising>
        </Right>
      </Wrapper>
    </div>
  );
}

export default Events;
