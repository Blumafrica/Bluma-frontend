import React from "react";
import NavBar from "../../LandingComponent/NavBar";
import HeroSection from "../../LandingComponent/HeroSection";
import Tour from "../../LandingComponent/comingSoon/Tour";
import Card from "../../LandingComponent/landingPageCard/Card";
import postImg from "../../LandingComponent/assets/rectangle2.svg";
import ubuntoSpirit from "../../images/Ubuntu.jpg"
import oral from "../../images/Oral.jpg"
import respectElder from "../../images/respect_elders.jpg"
import festivalCelebration from "../../images/festival.png"
import FestivalSlideShow from "../../LandingComponent/festivalsSlide/FestivalSlideShow";
import Footer from "../../LandingComponent/footer";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
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
        <AddArticleBtn />
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

      <div className="card-section">
        <Card
          class="card-item"
          coverPic={ubuntoSpirit}
          heading="Ubuntu Spirit"
          description="In the heart of Nigeria's cultural tapestry lies the Ubuntu spirit, a philosophy that emphasizes interconnectedness, compassion, and community. This value reflects the belief that one's humanity is tied to the well-being of others. In Nigeria, communities thrive on the principle of Ubuntu, fostering a sense of shared responsibility and mutual support. It permeates through daily interactions, celebrations, and challenges, creating a societal fabric tightly woven with empathy and unity. The Ubuntu spirit not only shapes interpersonal relationships but also forms the foundation of a resilient and collective identity, where the success and struggles of one are intimately linked to the prosperity and hardships of all."
        />
        <Card
          class="card-item"
          coverPic={oral}
          heading="Oral Tradition"
          description="Nigeria's cultural richness is encapsulated in its vibrant oral tradition, where stories, myths, and histories are passed down through generations with an artistry that transcends time. Elders become living repositories of wisdom, narrating tales that connect the past with the present. This oral tradition is a living testament to Nigeria's diverse heritage, encapsulating the nuances of different ethnic groups. Through the rhythmic cadence of storytelling, values, moral lessons, and cultural pride are preserved, ensuring that the essence of Nigeria's history remains alive in the collective memory of its people."
        />
        <Card
          class="card-item"
          coverPic={respectElder}
          heading="Respect for Elders"
          description="A cornerstone of Nigerian cultural values is the profound respect accorded to elders. Rooted in the wisdom and experiences of those who came before, this value is a guiding principle in Nigerian society. Elders are seen as repositories of knowledge, and their counsel is sought in matters ranging from personal decisions to community affairs. The respect for elders goes beyond familial ties, extending to community leaders and traditional authorities. It fosters a sense of continuity and stability, bridging the gap between generations and maintaining a harmonious balance between tradition and progress"
        />
        <Card
          class="card-item"
          coverPic={festivalCelebration}
          heading="Festivals and Celebrations"
          description="Nigeria's cultural vibrancy is manifested in its diverse festivals and celebrations, each reflecting the unique traditions of various ethnic groups. From the colorful and energetic Durbar festival in the north to the flamboyant and rhythmic Carnival in the south, these celebrations are a testament to the richness of Nigeria's cultural mosaic. Festivals serve as occasions for communal bonding, expressions of spirituality, and showcases of artistic prowess. They bring people together, transcending linguistic and regional boundaries, and offer a platform for the preservation and promotion of cultural values, ensuring that the spirit of celebration remains an integral part of Nigeria's identity"
        />
      </div>
      <FestivalSlideShow />
      <Footer />
    </div>
  );
}

export default LandingPage;
