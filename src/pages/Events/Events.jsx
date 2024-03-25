import React from "react";
import BlumaLogo from "../../LandingComponent/Button&Search/BlumaLogo";
import styled from "styled-components";
import { posts } from "../../posts";
import Footer from "../../layout/Footer"
// import Card from "../../LandingComponent/landingPageCard/Card";
import { Link, useNavigate, NavLink } from "react-router-dom";
import PostCard from "../../component/postCard/PostCard";
import pic from "../../LandingComponent/assets/profileImg.svg";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  margin: auto;
  /* position: absolute; */
`;
const Left = styled.div`
  flex: 2;
  // border: 2px solid green;
`;
const Middle = styled.div`
  flex: 8;
  display: flex;
  // border: 2px solid rgb(244, 167, 244);
  border-radius: 15px;
  padding: 2rem;
  width: fit-content;
  // border: 2px solid blue;
`;
const InnerSectionRight = styled.div`
  flex: 2;
  // border: 2px solid pink;
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
const StyledNavLink = styled(NavLink)`
  color: #000; /* Change color as needed */
  text-decoration: none;
  margin-bottom: 1rem;
  display: block;
`;
const PostDisplayArea = styled.div`
flex: 8;
`;
const Culture = styled.section``;
const Entertainment = styled.section``;
const Sport = styled.section``;
const Educational = styled.section``;

function Events() {
  return (
    <div>
      {/* <nav className="nav-bar"></nav> */}
      <Wrapper>
        <Left>
          <BlumaLogo />
          <StyledNavLink>
            <Culture>Culture</Culture>
          </StyledNavLink>
          <StyledNavLink>
            <Entertainment>Entertainment</Entertainment>
          </StyledNavLink>
          <StyledNavLink>
            <Sport>Sport</Sport>
          </StyledNavLink>
          <StyledNavLink>
            <Educational>Educational</Educational>
          </StyledNavLink>
        </Left>
        <Middle>
          <PostDisplayArea>
            {posts.map((post) => (
              <Link to={`/PostView/${post.id - 1}`}>
                <PostCard
                  profilePic={pic}
                  username="James Klinkov"
                  title={post.title}
                  postImg={post.imgUrl}
                  textContent={post.content}
                />
              </Link>
            ))}
          </PostDisplayArea>

          <InnerSectionRight>
            <Advertising>
              <AdvertContent>Advertise Here</AdvertContent>
            </Advertising>
          </InnerSectionRight>
        </Middle>

      </Wrapper>
      {/* <Footer/> */}
    </div>
  );
}

export default Events;
