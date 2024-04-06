import React from "react";
import NavBar from "../../LandingComponent/NavBar";
import HeroSection from "../../LandingComponent/HeroSection";
import Tour from "../../LandingComponent/comingSoon/Tour";
import Card from "../../LandingComponent/landingPageCard/Card";
import postImg from "../../LandingComponent/assets/rectangle2.svg";
import FestivalSlideShow from "../../LandingComponent/festivalsSlide/FestivalSlideShow";
import Footer from "../../LandingComponent/footer";
import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { posts } from "../../posts";
import "./landingpage.css";
import axios from "axios";


function LandingPage() {
  const [post, setPosts] = useState([]);
  const [user, setUser] = useState();
  const [profile, setProfile] = useState("");
  const [userName, setUserName] = useState("");
  const [authority, setAuthority] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();
  let data = {};
  const maxWord = 400;
  async function getPost(e) {
    e.priventDefault();
    try {
      const response = await axios.get("/api/v1/getAdminPost");
      console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  const navigateToError = useCallback((param) => {
    navigate("/Error", { state: { value: param } });
  }, []);
  const getUserProfile = useCallback(async (userId, userAuthority) => {
    try {
      const url = "";
      const data = { userId, userAuthority };
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const foundProfile = await response.json();
        console.log(foundProfile);
        setProfile(foundProfile);
      }
    } catch (error) {
      console.log(error);
      navigateToError(error);
    }
  });

  const getUser = useCallback(async () => {
    let data = { id, authority };
    const url = "/api/getUser/";
    let response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const foundUser = await response.json();
      console.log(foundUser);
      setUser(foundUser);
      const profile = getUserProfile(foundUser.id, foundUser.authority);
      setProfile(profile.id);
    }
  });
  const useMemo = () => {
    return post.map((object, position) => (
      <div className="landing-page">
        {setId(object.postOwnerId)}
        {setAuthority(object.postOwnerAuthority)}
        {getUser(object.postOwnerId)}
        <NavBar />
        <HeroSection />
        <Tour />
        <div className="card-section">
          <Card class="card-item" coverPic={postImg}></Card>
        </div>
      </div>
    ));
  };

  return (
    <div className="landing-page">
      <NavBar />
      <HeroSection />
      <Tour />

      <div class="grid grid-cols-2 gap-[20px] place-items-center" >
        {posts.slice(0, 4).map((post) => (
          <Link to={`/Login`}>
            <Card
              heading={post.title}
              coverPic={post.imgUrl}
              userPic={post.imgUrl}
              userName={'mariam ambali'}
              date={"20-23-2003"}
              description={
                post.content && post.content.length > maxWord
                  ? `${post.content.substring(0, maxWord)}............`
                  : post.content
              }
            />
          </Link>
        ))}
      </div>
      <FestivalSlideShow />
      <Footer />
    </div>
  );
}

export default LandingPage;
