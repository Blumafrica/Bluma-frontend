import React, { useState, useMemo } from "react";
import BlumaLogo from "../../LandingComponent/Button&Search/BlumaLogo";
import Notification from "../../LandingComponent/notification/Notification";
import { NavLink, useParams } from "react-router-dom";
import img from "../../LandingComponent/assets/rectangle2.svg";
import like from "../../LandingComponent/assets/like 1.svg";
import "./postView.css";
import { MarkChatReadOutlined} from "@mui/icons-material";
import Footer from "../../LandingComponent/footer";
import styled from "styled-components";
import { posts } from "../../posts";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Modal } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Roddy from '../../images/roddy-dec-14.jpg'


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


const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: "15px 15px 15px 15px",
  boxShadow: 24,
  p: 4,
  wordWrap: "break-word",

};

function PostView() {
  const { id } = useParams();
  
  const [commentSecDis, setcommentSecDis] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [noOfLikes, setNoOfLikes] = useState(0);
  const [noOfComments, setNoOfComments] = useState(0);
  const [openModal, setOpenModal] = React.useState(false)
  const [isComment, setIsComment] = React.useState(false)
  const showComment = () => setIsComment(true)
  const handleClose = () => setOpenModal(false)
  const handleOpen = (state) => setOpenModal(state)
  const [content, setContent] = useState("write something....")
  const [list, setList] = useState(["cnmndmd", "flo mili ", "never wanna lose me"])
 
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

  function openComent () {
    {handleOpen(true)}
  }

  
  function handleContent (e)  {
    setContent(e.target.value)
    console.log("content", content);
    {showComment()}
  }


  const getComments =  useMemo(() => {
    console.log(" at get list ==>  ", list)
    console.log("at get lenght ---> ", list.length);
      let time = new Date();
      let now = time.getTime();
       return list.map((comment, position) => (
       <div>
          <div className="eachComent" key={position}>
            <img className="images" src={Roddy}></img>
         <div>
          <div>
          <div className="nametime">
             <p>username</p> <p>{position} </p><p>{now}</p>
         </div>
         <div className="userComment">
           {comment}
          </div>
          </div>
         
        </div>
       </div>
      </div>
      ))
    
   
  }, [list, ])

  const createComment = () => {
    // list.push(content)
    setList([...list, content])
    console.log("list after add ==z> ", list, "length" , list.length);
    {handleClose()}
    // {getComments()}

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
        <Notification />
      </nav>
      <div className="wrapper">
        <div className="post-img">
          <img
            src={posts[id].imgUrl}
            alt=""
            style={{ width: "80%", height: "400px", margin: "auto" }}
          />
        </div>
        <span className="lines"></span>
        <span className="lines"></span>
        <h1>{posts[id].title}</h1>
        <div className="text-content">{posts[id].content}</div>
        <CommentBtn onClick={openComent}>
          <MarkChatReadOutlined />
        </CommentBtn>
        <NofComments>{list.length}</NofComments>
        <LikeBtn onClick={toogleLikeBtn}>
          <StyledFavoriteBorderIcon likeState={isLiked} />
        </LikeBtn>
        <NoOfLikes>{noOfLikes + posts[id].likeCount}</NoOfLikes>
        <CommentBox status={commentSecDis}></CommentBox>
         
        {
            openModal ? 
            <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
                 <div >
                     <div>{content}</div><br></br>
                     <input className="inputs" onChange={handleContent}></input>
                     <button className="commentButton" onClick={createComment}>comment</button>
                 </div>
            </Box>
          </Modal>
          :null
          }
      </div>
      <div className="commentSection">
        number of comment: {list.length}
        {/* www %
        <div>{getComments}</div>
        wsuhwusiw */}
        <div>{getComments}</div>
        {/* <>

        {list.map((comment, position) => (
         <div>
            <div className="eachComent" key={position}>
              <img className="images" src={Roddy}></img>
           <div>
            <div>
            <div className="nametime">
               <p>username</p> <p>ieieie</p>
           </div>
           <div className="userComment">
             {comment}
            </div>
            </div>
           
          </div>
         </div>
        </div>
        ))}
        </> */}

      </div>
      <Footer />
    </div>
  );
}

export default PostView;
