// import Header from "../layout/header";
import HomeHeader from "../layout/HomeHeader"
import background from "../images/background.jpg";
import ColumnPage from "../component/ColumnPage";
import axios from "axios";
import { useMemo, useCallback, useState } from "react";
import Card from "../LandingComponent/landingPageCard/Card";
import { Link, useNavigate } from "react-router-dom";
import { posts } from "../posts";
import pic from "../LandingComponent/assets/profile.svg"

import Footer from "../layout/Footer";
import "../layout/HomePage.css"


export default function Homepage(){
   const [foundPosts, setFoundPosts] = useState([posts])
    const maxWord = 400;
    const getPostUrl = "http://localhost:3000/api/v1/getAdminPost"
    const ur = "/getAdminPost";
    const navigate = useNavigate()

   const fetchPost = async () => {
    try{
    const response = await axios.get(
      getPostUrl,
      {headers: {
        "Content-Type": "application/json"
      },
        withCredentials: true}
    )
    const posts = await response.json(); 
    setFoundPosts(posts);
      console.log( "received ==>", posts)
      
    }catch(error){
      console.log("error ", error)
    }
   
   }
   const handlePost =  (para) => {
        navigate("/PostArticle", {state: {value: para}})
   }
    return(
        <>
        <HomeHeader />
        {fetchPost}
        <div className="posts">
          <div className="const"> 
            
           <p className="m-2 p-4 w-4/5 text-purple-500 font-bold sm:text-2xl " onClick={fetchPost}>Latest posts</p>
           {/* <p className="m-3 p-4 w-4/5 text-purple-500 font-bold sm:text-2xl " onClick={handlePost}>create post</p> */}
           <button className="button">create post</button>
          </div>


           <div className="card-section">
            {posts.slice(0, posts.length).map((post) => (
          <Link to={`/PostView/${posts.id-1}`}>
            <Card
              heading={post.title}
              coverPic={post.imgUrl}
              description={
                post.content && post.content.length > maxWord
                  ? `${post.content.substring(0, maxWord)}............`
                  : post.content
              }
            />
          </Link>
             ))}
            </div>
        </div>
       
             
        <div class="bg-black text-white p-3">
            <div class="grid grid-cols-2 p-4">
            <div class="p-2">
                <h1 class="text-5xl font-mono">Building an Online Community </h1>
                <p class="text-2xl">We're the leading company of all </p>
            </div>
            <div class="text-center">
                <input class=" w-3/4 text-2xl p-4 text-center text-black" type="text" placeholder="Enter Message"></input>
                <div class="flex justify-center">
                <p class="cursor-pointer m-4 p-3 text-2xl w-1/3 bg-black text-white rounded-lg">Send Message</p>
                </div>
            </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

