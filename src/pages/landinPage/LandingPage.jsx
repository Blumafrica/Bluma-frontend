
import React from "react";
import NavBar from "../../LandingComponent/NavBar";
import HeroSection from "../../LandingComponent/HeroSection";
import AddArticleBtn from "../../LandingComponent/Button&Search/addArticleBtn";
import Tour from "../../LandingComponent/comingSoon/Tour";
import Card from "../../LandingComponent/landingPageCard/Card";
import postImg from "../../LandingComponent/assets/rectangle2.svg";
import userPic from "../../LandingComponent/assets/profileImg.svg";
import FestivalSlideShow from "../../LandingComponent/festivalsSlide/FestivalSlideShow";
import Footer from "../../LandingComponent/footer"
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./landingpage.css"
import axios from "axios";

function LandingPage() {



   const [post, setPosts] = useState([]);
   const [user, setUser] = useState();
   const [profile, setProfile] = useState('')
   const [userName, setUserName] = useState('')
   const [authority, setAuthority] = useState('')
   const [id , setId] = useState('')
   const navigate = useNavigate()
   let data = {}


  


    async function getPost  (e){
      e.priventDefault();
      try{
      const response = await axios.get('/api/v1/getAdminPost')
      console.log(response.data);
      setPosts(response.data);

      }catch (error){
        console.log(error);
      }
    }
    const navigateToError = useCallback ((param) =>{
      navigate("/Error", {state: {value : param}})
      
    }, [])
    const getUserProfile = useCallback(async (userId, userAuthority) =>{

      try{
      const url = ''
      const data = {userId, userAuthority}
      const response = await fetch(url , {
        headers : {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
      })

      if(response.ok){
        const foundProfile = await response.json();
        console.log(foundProfile);
        setProfile(foundProfile);
      }
    }catch(error){
      console.log(error)
       navigateToError(error);
    }
    })


    const getUser = useCallback (async () => {
      let data = {id, authority}
      const url = "/api/getUser/"
      let response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      if(response.ok){
        const foundUser = await response.json();
        console.log(foundUser)
        setUser(foundUser);
        const profile = getUserProfile(foundUser.id, foundUser.authority);
        setProfile(profile.id)
      }
    })
    const useMemo = ( () => {

    return post.map((object, position) => (
      <div className="landing-page">
       {setId(object.postOwnerId)}{setAuthority(object.postOwnerAuthority)}
        {getUser(object.postOwnerId)}
        <NavBar/>
        <HeroSection/>
        <AddArticleBtn/>
        <Tour/>
        <div className="card-section">
          <Card class="card-item"
          coverPic={postImg}
          >

          </Card>
        </div> 

      </div>
    ))
  

   });
    
      



  return (
    <div className="landing-page">
      <NavBar />
      <HeroSection />
      <AddArticleBtn />
      {/* <Tour /> */}
      <div className="card-section">
        <Card
          class="card-item"
          coverPic={postImg}
          heading="A brief stroy about nigeria"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
         printer took a galley of type and scrambled it to make a type specimen book. It has"
          summary="It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed 
          to using 'Content here, content here',
          making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their"
          userPic={userPic}
          userName="John Ebubu Ehni"
          date="22th November 2017"
        />
        <Card
          class="card-item"
          coverPic={postImg}
          heading="A brief stroy about nigeria"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
         printer took a galley of type and scrambled it to make a type specimen book. It has"
          summary="It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed 
          to using 'Content here, content here',
          making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their"
          userPic={userPic}
          userName="John Ebubu Ehni"
          date="22th November 2017"
        />
        <Card
          class="card-item"
          coverPic={postImg}
          heading="A brief stroy about nigeria"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
         printer took a galley of type and scrambled it to make a type specimen book. It has"
          summary="It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed 
          to using 'Content here, content here',
          making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their"
          userPic={userPic}
          userName="John Ebubu Ehni"
          date="22th November 2017"
        />
        <Card
          class="card-item"
          coverPic={postImg}
          heading="A brief stroy about nigeria"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
         printer took a galley of type and scrambled it to make a type specimen book. It has"
          summary="It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed 
          to using 'Content here, content here',
          making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their"
          userPic={userPic}
          userName="John Ebubu Ehni"
          date="22th November 2017"
        />
      </div>
      <FestivalSlideShow />
      <Footer />
    </div>
  );
}

export default LandingPage;