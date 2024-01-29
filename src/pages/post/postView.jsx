import {useState} from "react";
import BlumaLogo from "../../LandingComponent/Button&Search/BlumaLogo";
import Notification from "../../LandingComponent/notification/Notification";
import { NavLink } from "react-router-dom";
import img from "../../LandingComponent/assets/rectangle2.svg";
import like from "../../LandingComponent/assets/like 1.svg";
import "./postView.css";
import Footer from "../../LandingComponent/footer";
import styled from "styled-components";

const CommentBox = styled.input`
    border: 1px solid gray;
    display: ${props => props.status ? "block" : "none"}
  `;
  const CommentBtn = styled.button``;
  const LikeBtn = styled.button``;
  const NoOfLikes = styled.span``;
  const NofComments = styled.span``;


function PostView() {
  const [commentSecDis, setcommentSecDis] = useState(false)
  function showCommentBox(){
    setcommentSecDis(true)
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
          <img src={img} alt="" style={{ width: "100%", height: "600px" }} />
        </div>
        <span className="lines"></span>
        <span className="lines"></span>
        <h1>Post Header</h1>
        <div className="text-content">
        Nigeria, officially Federal Republic of Nigeria, Country, western Africa. Area: 356,669 sq mi (923,768 sq km). 
        Population: (2023 est.) 222,486,000. Capital: Abuja. There are more than 250 ethnic groups, including Hausa, 
        Fulani, Yoruba, and Igbo. Languages: English (official), Hausa. Religions: Christianity (Protestant, other 
        Christians, Roman Catholic), Islam, traditional beliefs. Currency: naira.

        Nigeria consists of plateaus and the lowlands between them, which are major river basins fed especially by the 
        Niger River. It has a developing mixed economy based largely on petroleum production and agriculture; manufacturing 
        is growing in importance. Services, trade, and transportation employ more than two-fifths of the workforce. Nigeria 
        is a federal republic with two legislative bodies; its head of state and government is the president.

        Inhabited for thousands of years, the region was the centre of the Nok culture from 500 bce to 200 ce and of several 
        precolonial empires, including Kanem-Bornu, Benin, and Oyo. The Hausa and Fulani also had states. Visited in the 15th 
        century by Europeans, it became a centre for the trade in enslaved people. The area began to come under British control 
        in 1861 and was made a British colony in 1914. Nigeria gained independence in 1960 and became a republic in 1963. Ethnic 
        strife soon led to military coups, and military groups ruled the country from 1966 to 1979 and from 1983 to 1999. Civil 
        war between the federal government and the former Eastern region, Biafra (1967–70), ended in Biafra’s surrender after the 
        death by starvation of perhaps a million Biafrans. In 1991 the capital was moved from Lagos to Abuja. The government’s 
        execution of Ken Saro-Wiwa in 1995 led to international sanctions, and civilian rule was finally reestablished in 1999 with 
        the election of a president. Ethnic strife—formerly held in check by periods of military rule—erupted in the early 21st century, 
        as did protests over oil production in the Niger delta. Friction also increased between Muslims and Christians after some of 
        the northern and central states adopted Islamic law (the Sharīʿah).
        
        </div>
        <CommentBtn onClick={showCommentBox}></CommentBtn>
        <LikeBtn></LikeBtn>
        <CommentBox status ={commentSecDis}></CommentBox>
      </div>
      <Footer />
    </div>
  );
}

export default PostView;
