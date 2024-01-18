import BlumaLogo from "../../LandingComponent/Button&Search/BlumaLogo";
import { NavLink } from "react-router-dom";
import Notification from "../../LandingComponent/notification/Notification";
import "./post.css";
import { useState, useCallback } from "react";
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
  // const post = useCallback(async () =>{
  //  let url = '/api/v1/post/'
  //  const response = await fetch(url,
  //   {'method' : Post,{image, }})

  // }, []);

  // const post  useCallback (async =>{
  //   let url = '/api/v1/post/'
  //   const response = await fetch(url, {method : 'post'})
  // }, [])

  return (
    <div className="user-post" >
      <nav className="nav-bar">
        <BlumaLogo />
        <div className="links">
          <NavLink to="/About" color="white">About</NavLink>
          <NavLink to="/products" color="white">Product</NavLink>
          <NavLink to="/post-view" background-color="white">view posts</NavLink>
        </div>
        {/* <Notification /> */}
      </nav>

      <div className="container">
        <h1 font-size={'bold'}>Create Post</h1>
        {/* <label htmlFor="">Title</label> */}
        <input type="text" placeholder="Enter title" className="title-input"/>
        <br />
        {/* <label htmlFor="">Description</label>
        <input type="text" placeholder="Write Summary" />
        <br /> */}
        <label htmlFor="post">Write post</label>
        <textarea name="post" id="" cols="30" rows="10"></textarea>
        <input type="file" className="image" onChange={uploadImg}/>
      </div>
      {/* <div className="btns"> */}
        <button className="create-post">post</button>
        {/* <button className="reset-post">reset</button> */}
      {/* </div> */}
      {/* <Footer/> */}
    </div>
  );
}

export default Post;
