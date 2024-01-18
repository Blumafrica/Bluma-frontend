import React from "react";
import BlumaLogo from "../../LandingComponent/Button&Search/BlumaLogo";
import { NavLink } from "react-router-dom";
import Notification from "../../LandingComponent/notification/Notification";
import "./post.css";
import { useState } from "react";
import Footer from "../../LandingComponent/footer";

function Post() {
  const apiKey= "";
  const apiName ="";
  const [image, setImage] = useState();

  function uploadImg(event){
    const file = event.target.file[0]
    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset",apiKey)
    
  }
  return (
    <div className="user-post">
      <nav className="nav-bar">
        <BlumaLogo />
        <div className="links">
          <NavLink to="/About">About</NavLink>
          <NavLink to="/products">Product</NavLink>
          <NavLink to="/post-view">view posts</NavLink>
        </div>
        <Notification />
      </nav>

      <div className="container">
        <h1>Create Post</h1>
        <label htmlFor="">Title</label>
        <input type="text" placeholder="Enter title" className="title-input"/>
        <br />
        {/* <label htmlFor="">Description</label>
        <input type="text" placeholder="Write Summary" />
        <br /> */}
        <label htmlFor="post">Write post</label>
        <textarea name="post" id="" cols="30" rows="10"></textarea>
        <input type="file" className="image" onChange={uploadImg}/>
      </div>
      <div className="btns">
        <button className="create-post">+ Add file</button>
        <button className="reset-post">reset</button>
      </div>
      <Footer/>
    </div>
  );
}

export default Post;
