import BlumaLogo from "../../LandingComponent/Button&Search/BlumaLogo";
import { NavLink, useLocation } from "react-router-dom";
import Notification from "../../LandingComponent/notification/Notification";
import "./post.css";
import { useState, useCallback } from "react";
import axios from "axios";
import Axios from "axios";
import Homepage from "../HomePage";

function Post() {
  const [imgUpload, setImgUpload] = useState(null);
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [postSuccess, setPostSuccess] = useState(false);

  const handleInputChange = (e, setState) => {
    setState(e.target.value);
  };
  console.log("here -->");

  const uploadImage = async () => {
    console.log("here again --->");
    if (!imgUpload) {
      console.error("Please select an image");
      return;
    }

    const formData = new FormData();
    console.log("here here -->>");
    formData.append("file", imgUpload);
    formData.append("upload_preset", "myCloud");

    try {
      const cloudinaryResponse = await Axios.post(
        "https://api.cloudinary.com/v1_1/duc8kpcl9/image/upload",
        formData
      );
      const imageUrl = cloudinaryResponse.data.url;

      const postOwnerId = localStorage.getItem("userId");
      const authority = localStorage.getItem("authority");

      const postResponse = await Axios.post(
        "http://localhost:8080/api/v1/post/post",
        {
          content: content,
          description: description,
          fileUrl: imageUrl,
          authority: authority,
          posterId: Number(postOwnerId),
          // description:description,
          // content:content,
          // fileUrl:imageUrl,
          // authority:authority,
          // posterId:Number(postOwnerId),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      const { timePosted, postId, userPostId, message } = postResponse.data;
      console.log("time posted --> ", timePosted);
      console.log("post ID --> ", postId);
      console.log("post Owner --> ", userPostId);
      console.log("message --> ", message);
      setPostSuccess(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="user-post">
      {postSuccess ? (
        <Homepage />
      ) : (
        <>
          <nav className="nav-bar">
            <BlumaLogo />
            <div className="links">
              <NavLink to="/About" style={{ color: "white" }}>
                About
              </NavLink>
              <NavLink to="/products" style={{ color: "white" }}>
                Product
              </NavLink>
              <NavLink to="/post-view" style={{ backgroundColor: "white" }}>
                view posts
              </NavLink>
            </div>
          </nav>

          <div className="container">
            <h1 style={{ fontSize: "bold" }}>Create Post</h1>
            <input
              type="text"
              placeholder="Enter title"
              className="title-input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <label htmlFor="post">Write post</label>
            <textarea
              name="post"
              cols="30"
              rows="10"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <input
              type="file"
              className="image"
              onChange={(e) => setImgUpload(e.target.files[0])}
            />
          </div>
          <button className="create-post" onClick={uploadImage}>
            post
          </button>
        </>
      )}
    </div>
  );
}

export default Post;
