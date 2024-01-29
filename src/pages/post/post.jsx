import BlumaLogo from "../../LandingComponent/Button&Search/BlumaLogo";
import { NavLink , useLocation} from "react-router-dom";
import Notification from "../../LandingComponent/notification/Notification";
import "./post.css";
import { useState, useCallback } from "react";
import Footer from "../../LandingComponent/footer";

function Post() {
  // const userDetails = useLocation.state;
  const apiKey= "";
  const apiName ="";
  const [image, setImage] = useState([]);
  const [discription, setDiscription] = useState('description')
  const [context, setContext] = useState('context')
  const url = 'http://localhost:2005/api/v1/post/';
  const [userId] = useState('106')
  const [userAuthority] = useState('user')

  function uploadImg(event){
    const file = event.target.file[0]
    const formData = new FormData('')
    formData.append("file", file)
    formData.append("upload_preset",apiKey)
    
  }
  const handleDiscription = (e) => {
    const data = e.target.value;
     setDiscription(data)
  }
  const handleContext = (e) => {
    const data = e.target.value;
    setContext(data)
  }

  const post = async (e) => {
    e.preventDefault();
    try{
    const data = {
      contexts : context,
      descriptions: discription,
      posterId: userId,
      authority: userAuthority
    }
    const authToken = "";
    const response = await fetch(url, {
       method : 'POST',
       headers :{
        'Content-Type' : 'application/json',
         'Authorization': `${authToken}`
       },
       body : JSON.stringify(data)
    })
    if(response.ok){
      const {time, postId, postOwnerId, message} = response.data;
      console.log("time posted => " ,time);
      console.log("postId => ", postId)
      console.log("postOwnerId => ", postOwnerId);
      console.log("message => ", message);


    }
  }catch(error){
    console.log(error);
  }
  }
  const apiKeys = '524936472486191'
  const apiSecret = 'AykjJccAQF3-wdK83CqfvS2vvz8'
  const name = 'BlumaAfrica'
  


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
        <input type="text" placeholder="Enter title" className="title-input"  onChange={handleDiscription}/>
        <br />
        {/* <label htmlFor="">Description</label>
        <input type="text" placeholder="Write Summary" />
        <br /> */}
        <label htmlFor="post">Write post</label>
        <textarea name="post" id="" cols="30" rows="10" onChange={handleContext} ></textarea>
        <input type="file" className="image" onChange={uploadImg} />
      </div>
      {/* <div className="btns"> */}
        <button className="create-post" onClick={post}>post</button>
        {/* <button className="reset-post">reset</button> */}
      {/* </div> */}
      {/* <Footer/> */}
    </div>
  );
}

export default Post;
