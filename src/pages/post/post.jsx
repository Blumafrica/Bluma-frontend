import BlumaLogo from "../../LandingComponent/Button&Search/BlumaLogo";
import { NavLink, useLocation } from "react-router-dom";
import Notification from "../../LandingComponent/notification/Notification";
import "./post.css";
import { useState, useCallback } from "react";
import axios from "axios";

function Post() {
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("")
  const [fileUrl, setFileUrl] = useState("");
  const [userId] = useState("106");
  const [userAuthority] = useState("user");

  const [imgUpload, setImgUpload] = useState(null);

  function uploadImage() {
    if (!imgUpload) {
      console.error("Please select an image");
      return;
    }
    const formData = new FormData();
    formData.append("file", imgUpload);
    formData.append("upload_preset", "myCloud");
    const response = axios.post(
      "https://api.cloudinary.com/v1_1/duc8kpcl9/image/upload",
      formData
    ).then((res) => {
      console.log(res.data.url);
    });
    setFileUrl(response.data.url)
  }

  const post = async (e) => {
  
  };
  const apiKeys = "524936472486191";
  const apiSecret = "AykjJccAQF3-wdK83CqfvS2vvz8";
  const name = "BlumaAfrica";

  return (
    <div className="user-post">
      <nav className="nav-bar">
        <BlumaLogo />
        <Notification/>
        <div className="links">
          <NavLink to="/About" color="white">
            About
          </NavLink>
          <NavLink to="/products" color="white">
            Product
          </NavLink>
          <NavLink to="/post-view" background-color="white">
            view posts
          </NavLink>
        </div>
      </nav>

      <div className="container">
        <h1 font-size={"bold"}>Create Post</h1>
        <input
          type="text"
          placeholder="Enter title"
          className="title-input"
          value={description}
          onChange={(e)=> setDescription(e.target.value)}
        />
        <br />
        <label htmlFor="post">Write post</label>
        <textarea
          name="post"
          id=""
          cols="30"
          rows="10"
          value={content}
          onChange={(e)=> setContent(e.target.value)}
        ></textarea>
        <input type="file" className="image" onChange={(e)=> setImgUpload(e.target.files[0])} />
      </div>
      <button className="create-post" onClick={post}>
        post
      </button>
    </div>
  );
}

export default Post;
