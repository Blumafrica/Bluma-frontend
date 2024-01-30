import React, { useState } from "react";
import BlumaLogo from "../../LandingComponent/Button&Search/BlumaLogo";
import Notification from "../../LandingComponent/notification/Notification";
import { NavLink, useParams } from "react-router-dom";
import img from "../../LandingComponent/assets/rectangle2.svg";
import like from "../../LandingComponent/assets/like 1.svg";
import "./postView.css";
import Footer from "../../LandingComponent/footer";
import styled from "styled-components";
import { posts } from "../../posts";
import FavoriteIcon from '@material-ui/icons/Favorite';


const StyledFavoriteBorderIcon = styled(FavoriteIcon)`
  color: ${(props) => (props.likeState ? "rgb(129, 52, 201)" : "black")};
  font-size: 24px;
`;

const CommentBox = styled.input`
  border: 1px solid gray;
  display: ${(props) => (props.status ? "block" : "none")};
`;

const CommentBtn = styled.button``;
const LikeBtn = styled.button``;
const NoOfLikes = styled.span``;
const NofComments = styled.span``;

function PostView() {
  const { id } = useParams();
  const [commentSecDis, setcommentSecDis] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [noOfLikes, setNoOfLikes] = useState(0);
  const [noOfComments, setNoOfComments] = useState(0);

  function showCommentBox() {
    setcommentSecDis(!commentSecDis);
  }

  function toogleLikeBtn() {
    if (!isLiked) {
      setIsLiked(true);
      setNoOfLikes(noOfLikes + 1);
    } else {
      setIsLiked(false);
      setNoOfLikes(noOfLikes - 1);
    }
  }

  return (
    <div className="post-view">
      <nav className="nav-bar">
        <BlumaLogo />
        <div className="links">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/product">Product</NavLink>
          <NavLink to="/post-view">view posts</NavLink>
        </div>
      </nav>
      <div className="wrapper">
        <div className="post-img">
          <img
            src={posts[0].imgUrl}
            alt=""
            style={{ width: "80%", height: "400px", margin: "auto" }}
          />
        </div>
        <span className="lines"></span>
        <span className="lines"></span>
        <h1>{posts[0].title}</h1>
        <div className="text-content">{posts[0].content}</div>
        <CommentBtn onClick={showCommentBox}>
          {/* commenticon */}
        </CommentBtn>
        <NofComments>{noOfComments}</NofComments>
        <LikeBtn onClick={toogleLikeBtn}>
          <StyledFavoriteBorderIcon likeState={isLiked} />
        </LikeBtn>
        <NoOfLikes>{noOfLikes + posts[0].likeCount}</NoOfLikes>
        <CommentBox status={commentSecDis}></CommentBox>
      </div>
      <Footer />
    </div>
  );
}

export default PostView;
