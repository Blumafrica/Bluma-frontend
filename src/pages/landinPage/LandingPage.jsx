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
import "./landingpage.css"

function LandingPage() {
  return (
    <div className="landing-page">
      <NavBar />
      <HeroSection />
      {/* <AddArticleBtn /> */}
      <Tour />
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
